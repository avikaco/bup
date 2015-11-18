var pronounciation = (function() {
'use strict';

function match_str(setup) {
	if (setup.is_doubles) {
		return setup.teams[0].players[0].name + '/' + setup.teams[0].players[1].name + ' vs ' + setup.teams[1].players[0].name + '/' + setup.teams[1].players[1].name;
	} else {
		return setup.teams[0].players[0].name + ' vs ' + setup.teams[1].players[0].name;
	}
}

// Team name as presented to the umpire
function teamtext_internal(s, team_id) {
	var player_names;
	if (s.setup.is_doubles) {
		player_names = (
			s.setup.teams[team_id].players[0].name + ' / ' +
			s.setup.teams[team_id].players[1].name);
	} else {
		player_names = s.setup.teams[team_id].players[0].name;
	}

	if (s.setup.team_competition) {
		return s.setup.teams[team_id].name + ' (' + player_names + ')';
	} else {
		return player_names;
	}
}

// Simplified announcement for minimal buttons
function loveall_announcement(s) {
	var prefix = '';
	if (s.match.finished_games.length == 1) {
		prefix = 'Zweiter Satz. ';
	} else if (s.match.finished_games.length == 2) {
		prefix = 'Entscheidungssatz. ';
	}

	return prefix + '0 beide.\nBitte spielen';
}

function postgame_announcement(s) {
	var winner_index = s.game.team1_won ? 0 : 1;
	var winner_score = s.game.score[winner_index];
	var loser_score = s.game.score[1 - winner_index];
	var winner = s.setup.teams[winner_index];
	var winner_name;
	if (s.setup.team_competition) {
		winner_name = winner.name;
	} else {
		if (s.setup.is_doubles) {
			winner_name = winner.players[0].name + ' und ' + winner.players[1].name;
		} else {
			winner_name = winner.players[0].name;
		}
	}
	var res = '';
	if (s.match.finished) {
		var previous_scores = s.match.finished_games.reduce(function(str, game) {
			str += game.score[winner_index] + '-' + game.score[1 - winner_index] + ' ';
			return str;
		}, '');

		res = 'Das Spiel wurde gewonnen von ' + winner_name + ' mit ' + previous_scores + winner_score + '-' + loser_score;
	} else if (s.match.finished_games.length === 0) {
		res = 'Der erste Satz wurde gewonnen von ' + winner_name + ' mit ' + winner_score + '-' + loser_score;
	} else if (s.match.finished_games.length == 1) {
		res = 'Der zweite Satz wurde gewonnen von ' + winner_name + ' mit ' + winner_score + '-' + loser_score + '; einen Satz beide';
	} else {
		throw new Error('Won third game but match not finished?');
	}
	return res;
}

function _prematch_team(s, team_id) {
	var team = s.setup.teams[team_id];
	var res = '';
	if (s.setup.team_competition) {
		res = team.name + ', vertreten durch ';
	}
	if (s.setup.is_doubles) {
		res += team.players[0].name + ' und ' + team.players[1].name;
	} else {
		res += team.players[0].name;
	}
	return res;
}

function _pronounciation_score(s, score, team1_serving, service_over) {
	if (score === undefined) {
		score = s.game.score;
	}
	if (team1_serving === undefined) {
		team1_serving = s.game.team1_serving;
	}
	if (service_over === undefined) {
		service_over = s.game.service_over;
	}
	var first_score = score[team1_serving ? 0 : 1];
	var second_score = score[team1_serving ? 1 : 0];
	var point_str = (s.game.gamepoint ? ' Satzpunkt' : (s.game.matchpoint ? ' Spielpunkt' : ''));
	var score_str = (
		(first_score == second_score) ?
		(first_score + point_str + ' beide') :
		(first_score + (point_str ? (point_str + ' ') : '-') + second_score)
	);
	var service_over_str = (service_over ? 'Aufschlagwechsel. ' : '');
	return service_over_str + score_str;
}

function marks2str(s, marks) {
	var res = '';
	marks.forEach(function(mark) {
		switch (mark.type) {
		case 'yellow-card':
			res += s.setup.teams[mark.team_id].players[mark.player_id].name + ', Verwarnung wegen unsportlichen Verhaltens.\n';
			break;
		case 'red-card':
			res += s.setup.teams[mark.team_id].players[mark.player_id].name + ', Fehler wegen unsportlichen Verhaltens.\n';
			break;
		case 'disqualified':
			res += s.setup.teams[mark.team_id].players[mark.player_id].name + ', disqualifiziert wegen unsportlichen Verhaltens.\n';
			break;
		case 'retired':
			res += s.setup.teams[mark.team_id].players[mark.player_id].name + ' gibt auf.\n';
			break;
		}
	});
	return res;
}

function pronounce(s) {
	var mark_str = marks2str(s, s.match.marks);

	if (s.match.announce_pregame && s.match.finished_games.length === 0) {
		var serving_team_id = s.game.team1_serving ? 0 : 1;
		var receiving_team_id = 1 - serving_team_id;

		var server_score_side = s.game.score[serving_team_id] % 2;
		var serving_player_id = s.game.teams_player1_even[serving_team_id] ? server_score_side : (1 - server_score_side);
		var receiving_player_id = s.game.teams_player1_even[receiving_team_id] ? server_score_side : (1 - server_score_side);

		var server_name = s.setup.teams[serving_team_id].players[serving_player_id].name;
		var receiver_name = s.setup.teams[receiving_team_id].players[receiving_player_id].name;

		if (s.setup.team_competition) {
			return (
				mark_str +
				'Meine Damen und Herren:\n' +
				'Zu meiner ' + (s.game.team1_left ? 'Rechten' : 'Linken') + ', ' + _prematch_team(s, 1) + ',\n' +
				'und zu meiner ' + (s.game.team1_left ? 'Linken' : 'Rechten') + ', ' + _prematch_team(s, 0) + '.\n' +
				s.setup.teams[serving_team_id].name + ' schlägt auf' + (s.setup.is_doubles ? (', ' + server_name + ' zu ' + receiver_name) : '') + '.\n' +
				_pronounciation_score(s) + '.\nBitte spielen.'
			);
		} else {
			return (
				mark_str +
				'Meine Damen und Herren:\n' +
				'Zu meiner Rechten, ' + _prematch_team(s, (s.game.team1_left ? 1 : 0)) + ',\n' +
				'und zu meiner Linken, ' + _prematch_team(s, (s.game.team1_left ? 0 : 1)) + '.\n' +
				server_name + ' schlägt auf' + (s.setup.is_doubles ? (' zu ' + receiver_name) : '') + '.\n' +
				_pronounciation_score(s) + '.\nBitte spielen.'
			);
		}
	} else if (s.match.announce_pregame) {
		var res = '';
		switch (s.match.finished_games.length) {
		case 1:
			res = 'Zweiter Satz.';
			break;
		case 2:
			res = 'Entscheidungssatz.';
			break;
		}

		res += ' 0 beide.';
		if (mark_str) {
			res += '\n' + mark_str + _pronounciation_score(s) + '. ';
		} else {
			res += '\n';
		}
		res += 'Bitte spielen.';
		return res;
	}

	if (s.game.finished) {
		var pre_mark_str = mark_str;
		var post_mark_str = '';
		if (s.game.final_marks) {
			pre_mark_str = marks2str(s, s.game.final_marks);
			var post_marks = s.match.marks.slice(s.game.final_marks.length);
			post_mark_str = marks2str(s, post_marks);
		}

		return (
			pre_mark_str +
			(s.game.won_by_score ? 'Satz.\n' : '') +
			(post_mark_str ? (post_mark_str) : '') +
			postgame_announcement(s)
		);
	}

	if (!s.game.finished && s.game.started) {
		if ((s.game.score[0] === 0) && (s.game.score[1] === 0) && !mark_str) {
			return null;  // Special case at 0-0, we just showed the long text. Time to focus on the game.
		}

		var interval_str = (s.game.interval ? ' Pause' : '') + (s.game.change_sides ? '. Bitte die Spielfeldseiten wechseln' : '');
		if (s.game.interval && mark_str) {
			var interval_pre_mark_str = marks2str(s, s.game.interval_marks);
			var post_interval_marks = s.match.marks.slice(s.game.interval_marks.length);

			if (post_interval_marks.length > 0) {
				var interval_post_mark_str = marks2str(s, post_interval_marks);
				if (interval_post_mark_str) {
					// Only use extended form if it's more than just a referee call
					return (
						interval_pre_mark_str +
						_pronounciation_score(s, s.game.interval_score, s.game.interval_team1_serving, s.game.interval_service_over) +
						interval_str + '.\n' +
						interval_post_mark_str +
						_pronounciation_score(s) + '. Bitte spielen.'
					);
				}
			}
		}

		return mark_str + _pronounciation_score(s) + interval_str;
	}

	if (mark_str) {
		return mark_str.trim();
	}

	return null;
}

return {
	pronounce: pronounce,
	loveall_announcement: loveall_announcement,
	postgame_announcement: postgame_announcement,
	match_str: match_str,
	teamtext_internal: teamtext_internal,
};

})();

/*@DEV*/
if (typeof module !== 'undefined') {
	module.exports = pronounciation;
}
/*/@DEV*/
