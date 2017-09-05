var i18n_en = {

'_code': 'en',
'_name': 'English',


'experimental': ' (experimental)',
'Event Sheet': 'event sheet',
'Automatic': 'Automatic',
'Court': 'Court',
'Select Court': 'Select Court',
'Score Sheet': 'Score Sheet',
'Statistics': 'Statistics',
'dialog-left': 'Left court side',
'dialog-server': 'Server',
'dialog-receiver': 'Receiver',
'Call referee': 'Call referee',
'Are you retiring?': 'Are you retiring?',
'import link': 'Import event from backup file ...',
'send export': 'send export file',
'select pick': 'Select',

'fullscreen:go': 'Go fullscreen',
'fullscreen:no': 'Normal screen',
'timer:restart': 'Restart timer',

'court:left': 'left',
'court:right': 'right',
'court:referee': 'Changes will not be transmitted',

'postmatch:label': '(This match is over)',
'postmatch:leave': 'Leave match',

'mdesc:finished': 'finished',
'mdesc:interval': 'interval',
'mdesc:selected': 'preparing match',
'mdesc:toss': 'inputing toss',
'mdesc:warmup': 'warmup',
'mdesc:incomplete': 'missing player names',
'mdesc:blocked': 'waiting for players ({matches})',
'mdesc:waiting': 'rest until {time}',
'mdesc:selectable': 'can be called',

'report problem': 'Report problem/suggestion',
'report:test': 'Test diagnostics',
'report:subject': 'Problem with bup',
'report:body': 'I encountered the following problem with the umpire panel:\n\n\n\n\nTechnical Information:\nVersion: {bup_version}\nLanguage: {lang}\nWeb browser: {ua}\nURL: {url}\nWindow size: {size} ({screen})\nSettings: {settings}\nError object: {last_error}\n',

'network:error': 'Network transmission error',
'network:error:unconfigured': 'Network connection not configured (demo mode? put #bldemo into the URL to see it)',
'network:Matches': 'Matches',
'network:restart match': 'Restart match at 0-0',
'network:resume match': 'Resume match at {score}',
'network:in progress': 'Match {match} has already been started',
'network:match finished': 'Match {match} already finished ({score})!',
'network:fetching courts': 'Fetching court list ...',

'editevent:link': 'Edit event',
'editevent:back': 'Back',
'editevent:add manual m': 'Other player (m) ..',
'editevent:add manual f': 'Other player (f) ..',
'editevent:enter player name': 'player name:',
'editevent:backup players': 'backup players',
'editevent:add backup player': 'Add backup player ...',
'editevent:present players': 'Present players',
'editevent:add present player': 'Add present player ...',
'editevent:select event': 'select event',

'setupsheet:header|m': 'Men',
'setupsheet:header|f': 'Women',
'setupsheet:header:backup': 'B',
'setupsheet:header:present': 'P',
'setupsheet:link': 'Setup sheet',
'setupsheet:add': 'add player',
'setupsheet:cancel': 'Cancel',
'setupsheet:save': 'Save',
'setupsheet:new player|m': 'other player ..',
'setupsheet:new player|f': 'other player ..',
'setupsheet:enter player name': 'player name:',
'setupsheet:pdf': 'PDF',
'setupsheet:print': 'Print',
'setupsheet:setup|0': 'Home Team Setup',
'setupsheet:setup|1': 'Away Team Setup',
'setupsheet:teamster': 'Teamster',
'setupsheet:signature': 'Signature',
'setupsheet:longlabel:backup': 'backup',
'setupsheet:longlabel:present': 'present',
'setupsheet:filename': 'Setup sheets {event_name}.pdf',
'setupsheet:confirm cancel': 'Discard changes to the setup?',

'button:undo': 'Undo',
'button:settings': 'Configuration',
'button:exception': 'Situation',
'button:shuttle': 'Shuttle Counter +1',
'button:redo': 'Redo',
'button:Unsuspend': 'Resume Play',
'button:Resume after injury': 'Resume Play',

'onmyleft.home_team': 'Ladies and Gentlemen:\nOn my right,\n{right_team},\nand on my left,\n{left_team}.\n{serving_team}{serving_str}.\n\n{score}.\nPlay.',
'onmyleft.away_team': 'Ladies and Gentlemen:\nOn my left,\n{left_team},\nand on my right,\n{right_team}.\n{serving_team}{serving_str}.\n\n{score}.\nPlay.',
'onmyleft': 'Ladies and Gentlemen:\nOn my right,\n{right_team},\nand on my left,\n{left_team}.\n{server}{receiver_str}.\n\n{score}.\nPlay.',
'onmyleft.serves': ' to serve',
'onmyleft.serveto': ' to serve to {receiver}',
'onmyleft.serve.to': ' to ',
'onmyleft.team.doubles': '{p1} and {p2}',
'onmyleft.representedby': ', represented by ',
'score.all': 'all',
'score.service_over': 'Service over. ',
'Interval': 'Interval',
'20secs': 'Court {court_id}, 20 seconds. Court {court_id}, 20 seconds.',
'20secs:nocourt': '20 seconds. 20 seconds.',
'change_ends': '; change ends',
'game point': 'game point',
'match point': 'match point',
'gamescore.0-0': '',
'gamescore.1-0': '',
'gamescore.1-1': '; One game all',
'gamescore.2-0': '. {games_leader_name} leads two games to love',
'gamescore.2-1': '. {games_leader_name} leads two games to one',
'gamescore.2-2': '; Two games all',
'gamescore.doubles.0-0': '',
'gamescore.doubles.1-0': '',
'gamescore.doubles.1-1': '; One game all',
'gamescore.doubles.2-0': '. {games_leader_name} lead two games to love',
'gamescore.doubles.2-1': '. {games_leader_name} lead two games to one',
'gamescore.doubles.2-2': '; Two games all',
'wonby.winner': ' won by {winner_name} {winner_score}-{loser_score}',
'wonby|1': 'First game',
'wonby|2': 'Second game',
'wonby|3': 'Third game',
'wonby|4': 'Fourth game',
'wonby.match': 'Match won by {winner_name} {score_str}',
'wonby.walkover': '(Walkover in favor of {winner_name}.\n{loser_name} did not show up.)',
'wonby.and': ' and ',
'game(won)': 'Game',
'match suspended': 'Play is suspended',
'ready to unsuspend': 'Are you ready?\n',
'ready to play': 'Ready to play.',

'demo:team1': 'Denmark',
'demo:player1.1': 'Joachim Fischer Nielsen',
'demo:player1.2': 'Christinna Pedersen',
'demo:team2': 'China',
'demo:player2.1': 'Zhang Nan',
'demo:player2.2': 'Zhao Yunlei',
'demo:match_name': 'Finals',
'demo:event_name': 'MX',
'demo:tournament_name': 'Demo',

'loveall_play': 'Bitte spielen.',
'loveall_play.0': '{score}; play',
'loveall_play.1': 'Second game; {score}; play',
'loveall_play.2': 'Third game; {score}; play',
'loveall_play.3': 'Fourth game; {score}; play',
'loveall_play.final': 'Final game; {score}; play',
'loveall_play.0.mark': 'Love all.\n{mark_str}{score}. Play.',
'loveall_play.1.mark': 'Second game; love all.\n{mark_str}{score}. Play.',
'loveall_play.2.mark': 'Third game; love all.\n{mark_str}{score}. Play.',
'loveall_play.3.mark': 'Fourth game; love all.\n{mark_str}{score}. Play.',
'loveall_play.final.mark': 'Final game; love all.\n{mark_str}{score}. Play.',

'postinterval.play': '{score}. Play.',

'card.yellow': '{player_name}, warning for misconduct.\n',
'card.red': '{player_name}, fault for misconduct.\n',
'card.red.interval': '{player_name}, faulted.\n',
'card.black': '{player_name}, disqualified for misconduct.\n',
'card.retired': '{player_name} retired.\n',
'card.play': '. Play.',

'scoredisplay:Service Over': 'Service Over',
'scoredisplay:Game Point': 'Game Point',
'scoredisplay:Match Point': 'Match Point',
'scoredisplay:Interval': 'Interval',
'scoredisplay:Change Ends': 'Change Ends',
'scoredisplay:Game': 'Game',

'button:Cancel': 'Cancel',

'bup.update_available': 'A new version of the umpire panel is now available.',
'bup.update_now': 'Update now',
'bup.update_later': 'Later',
'bup.updating': 'Updating ...',
'bup.updated.version': 'Version',

'settings:Back to Match': 'Back to match',
'settings:Current Match': 'Current match',
'settings:Edit Manually': 'Manual edit',
'settings:Abort Manual Edit': 'Cancel manual editing',
'settings:Matches': 'Matches',
'settings:Event Scoresheets': 'scoresheets',
'settings:Custom match details': 'custom match details ...',
'settings:Network statistics': 'network statistics',
'settings:Order link': 'match order',
'settings:Export link': 'Export',
'settings:New match': 'Create match',
'settings:Singles': 'Singles',
'settings:Doubles': 'Doubles',
'settings:team1-placeholder': 'e.g. Denmark',
'settings:team2-placeholder': 'e.g. China',
'settings:match_name-placeholder': 'e.g. MS',
'settings:event_name-placeholder': 'e.g. Finals',
'settings:tournament_name-placeholder': 'e.g. All-England 2018',
'settings:match_name-label': 'Match',
'settings:event-label': 'Event',
'settings:tournament_name-label': 'Tourn.',
'settings:team_competition': 'Team competition',
'settings:Start Match': 'Start match',
'settings:Resume Match': 'Resume match',
'settings:loadmatch_none': 'No stored matches',
'settings:Import Event': 'Import event',
'settings:import from URL': 'Import from URL',
'settings:import_url-placeholder': 'https://www.turnier.de/...',
'settings:counting': 'Scoring:',
'settings:counting|3x21': 'BWF (3x21)',
'settings:counting|2x21+11': '2x21, 3rd game until 11',
'settings:counting|5x11_15': 'BWF 2016 Experiment Option 1 (5x11 until max. 15)',
'settings:counting|5x11_15^90': 'German Bundesliga 2017 (5x11 until max. 15, 90s intervals)',
'settings:counting|5x11/3': 'BWF 2016 Experiment Option 2 (5x11 with 3 point challenge)',
'settings:counting|5x11_11': 'UAE (5x11 sudden death)',
'settings:counting|1x21': 'One Game (1x21)',
'settings:counting|1x11_15': 'One Game 2016 Experiment Option 1 (1x11 until max. 15)',
'settings:counting|3x15_18': 'Shortened (3x15 until max. 18)',

'settings:warmup': 'Warmup:',
'settings:warmup:bwf-2016': 'BWF 2016+ (120s, ready after 90s)',
'settings:warmup:legacy': 'legacy (120s)',
'settings:warmup:none': 'none',

'settings:Settings': 'Settings',
'settings:Court Description': 'Court:',
'settings:Court Description.placeholder': 'e.g. right',
'settings:Court Number': 'Number',
'settings:Select Court': 'Court:',
'settings:Umpire': 'Umpire',
'settings:Service judge': 'Service judge',
'settings:Language': 'Language',
'settings:editmode doubleclick': 'Enter manual edit mode by touching court twice',
'settings:Show Pronunciation': 'Show announcements',
'settings:Negative Timers': 'Timers go into negative',
'settings:Shuttle Counter': 'Show shuttle counter',
'settings:Request Fullscreen on Startup': 'Request fullscreen on startup',
'settings:Go Fullscreen': 'Go fullscreen',
'settings:Leave Fullscreen': 'Leave Fullscreen',
'settings:Button Block Timeout': 'Double press protection (ms)',
'settings:Network Timeout': 'Network timeout (ms)',
'settings:Network Repeat Interval': 'Network repeat interval (ms)',
'settings:wakelock:label': 'Acquire wakelock:',
'settings:wakelock:display': 'Only in displaymode',
'settings:wakelock:always': 'Always',
'settings:wakelock:never': 'Never',
'settings:click_mode': 'Touch Detection',
'settings:click_mode:auto': 'Automatic',
'settings:click_mode:touchstart': 'Fast',
'settings:click_mode:touchend': 'Slow',
'settings:click_mode:click': 'Native',
'settings:refmode:client:status': 'Referee:',
'settings:refmode:client:node_name': 'Device name:',
'settings:refmode:ws_url': 'Hub URL:',
'settings:refmode:redirected': 'Local Hub: ',
'settings:refmode:service judges': 'Match with service judges',

'settings:mode:label': 'Mode:',
'settings:mode:umpire': 'Umpire',
'settings:mode:display': 'Display',
'settings:mode:referee': 'Referee',

'exceptions:yellow-card-title': 'Yellow card',
'exceptions:yellow-card': 'Warning',
'exceptions:red-card-title': 'Red card',
'exceptions:red-card': 'Fault',
'exceptions:black-card-title': 'Disqualification',
'exceptions:black-card': 'Disqualified',
'exceptions:referee-title': 'Referee',
'exceptions:referee': 'Referee',
'exceptions:suspension-title': 'Suspension',
'exceptions:suspension': 'Suspension',
'exceptions:injury-title': 'Injury',
'exceptions:injury': 'Injury',
'exceptions:retired-title': 'A player resigns',
'exceptions:retired': 'Retired',
'exceptions:correction-title': 'Correction',
'exceptions:correction': 'Correction',
'exceptions:overrule-title': 'Overrule',
'exceptions:overrule': 'Overrule\nline judge',
'exceptions:walkover': 'Walkover',
'exceptions:walkover-title': 'Player did not show up',

'exceptions:dialog:correction': 'service court correction',
'exceptions:dialog:red-card': 'fault for misconduct (red card)',
'exceptions:dialog:yellow-card': 'warning for misconduct (yellow card)',
'exceptions:dialog:injury': 'injury',
'exceptions:dialog:retired': 'retired',
'exceptions:dialog:black-card': 'disqualified (black card)',
'exceptions:dialog:walkover': 'Walkover',

'mark:overrule': 'O',
'mark:referee': 'R',
'mark:suspension': 'S',
'mark:correction': 'C',
'mark:yellow-card': 'W',
'mark:red-card': 'F',
'mark:injury': 'I',
'mark:retired': 'Retired',
'mark:disqualified': 'Disqualified',
'mark:walkover': 'Walkover',

'scoresheet:Match': 'Match:',
'scoresheet:Date': 'Date:',
'scoresheet:Court': 'Court:',
'scoresheet:Umpire': 'Umpire:',
'scoresheet:Referee': 'Referee:',
'scoresheet:Service judge': 'Service judge:',
'scoresheet:Begin': 'Begin:',
'scoresheet:End': 'End:',
'scoresheet:Duration': 'Duration:',
'scoresheet:Shuttles': 'Shuttles:',
'scoresheet:points': 'Score',
'scoresheet:button:print': 'Print',
'scoresheet:button:pdf': 'PDF',
'scoresheet:button:note': 'Add note',
'scoresheet:button:back': 'Back',
'scoresheet:note:placeholder': 'Enter note here ...',
'scoresheet:server': 'S',
'scoresheet:receiver': 'R',
'scoresheet:Empty Scoresheet': 'Scoresheet',
'scoresheet:[Event Scoresheet Filename]': 'Scoresheets {event_name}',

'eventsheet:draw': 'Draw',
'eventsheet:Generate': 'Generate {sheetname}',
'eventsheet:Umpires': 'Umpires:',
'eventsheet:Location': 'Location:',
'eventsheet:Matchday': 'Match day:',
'eventsheet:Start Time': 'Start time:',
'eventsheet:Backup Players': 'Backup players:',
'eventsheet:Notes': 'Notes:',
'eventsheet:Protest': 'Protest:',
'eventsheet:back': 'Back',
'eventsheet:Event Sheet': 'Event Report',
'eventsheet:download empty': 'Download empty form',

'eventsheet:label|1BL-2015': '(German Bundesliga) result report sheet (2015)',
'eventsheet:label|2BLN-2015': '(German 2. Bundesliga North) result report sheet (2015)',
'eventsheet:label|2BLS-2015': '(German 2. Bundesliga South) result report sheet (2015)',
'eventsheet:label|1BL-2016': '(German Bundesliga) result report sheet (2016)',
'eventsheet:label|2BLN-2016': '(German 2. Bundesliga North) result report sheet (2016)',
'eventsheet:label|2BLS-2016': '(German 2. Bundesliga South) result report sheet (2016)',
'eventsheet:label|teamlist-1BL-2016': '(German 1. Bundesliga) team details',
'eventsheet:label|teamlist-2BLN-2016': '(German 2. Bundesliga North) team details',
'eventsheet:label|teamlist-2BLS-2016': '(German 2. Bundesliga South) team details',
'eventsheet:label|BL-ballsorten-2016': '(German 1./2. Bundesliga) list of approved shuttles (2016)',
'eventsheet:label|DBV-Satzungen-2016': 'German Laws&Regulations 2016/2017',
'eventsheet:label|RLW-2016': '(German Regionalliga West) result report sheet',
'eventsheet:label|RLN-2016': '(German Regionalliga North) result report sheet',
'eventsheet:label|RLN-Satzungen-2016': '(German Group North) laws & regulations (2016)',
'eventsheet:label|RLM-2016': '(German Regionalliga Middle) result report sheet',
'eventsheet:label|RLM-SpO-2015': '(German Group Middle) regulations (9/2015)',
'eventsheet:label|team-1BL-2015': '(German Bundesliga) team selection sheet (2015)',
'eventsheet:label|team-2BL-2015': '(German 2. Bundesliga) team selection sheet (2015)',
'eventsheet:label|NRW-2016': '(NRW leagues) result report sheet',
'eventsheet:label|NRW-Satzungen': '(Germany, NRW) laws & regulations',
'eventsheet:label|NLA-2017': '(Swiss NLA) Result sheet',

'stats:game': 'Game {number}',
'stats:match': 'Match',
'stats:back': 'Back',
'stats:serves': '#Serves {player_name}',
'stats|points': 'Points',
'stats|points_lr': 'Points left/right',
'stats|shuttles': 'Shuttles',
'stats|duration': 'Duration',
'stats|avg_rally_length': '⌀ Rally length',
'stats|longest_rally': 'Longest rally',
'stats|longest rally (game)': ' ({score})',
'stats|longest rally (match)': ' (game {game} at {score})',
'stats|longest_series': 'longest series',
'stats|largest_lead': 'largest lead',
'stats|lost_service_percent': '% services lost',

'netstats:No stats available': 'No network communication yet',
'stats|<25ms': 'latency <25ms',
'stats|<100ms': 'latency <100ms',
'stats|<250ms': 'latency <250ms',
'stats|<500ms': 'latency <500ms',
'stats|<2s': 'latency <2s',
'stats|<8s': 'latency <8s',
'stats|>8s': 'latency >8s',
'stats|latency_avg_str': '⌀ latency',
'stats|moving_avg_str': 'Moving ⌀',
'stats|failed_net_count': 'request loss',
'stats|failed_srv_count': 'server errors',
'stats|success_net_count': '# successful',
'stats|last_str': 'Latest value',

'pressdesc|pick_side': 'choice of ends',
'pressdesc|state:pick_side': 'left: {left_team},\nright: {right_team}',
'pressdesc|state:pick_server': '{player}',
'pressdesc|state:pick_receiver': '{player}',
'pressdesc|state:injury': '{player} injured',
'pressdesc|undo': 'undo',
'pressdesc|redo': 'redo',
'pressdesc|pick_server': 'pick server',
'pressdesc|pick_receiver': 'pick receiver',
'pressdesc|timer_restart': 'reset stop watch',
'pressdesc|correction': 'service court correction',
'pressdesc|state:correction': 'correct: {left_player} left,\n{right_player} right',
'pressdesc|injury': 'injury',
'pressdesc|overrule': 'overrule line judge',
'pressdesc|suspension': 'match suspended',
'pressdesc|resume': 'resume match',
'pressdesc|injury-resume': 'resume match',
'pressdesc|score:left': 'score left',
'pressdesc|score:right': 'score right',
'pressdesc|love-all': 'Love all',
'pressdesc|shuttle': '+1 shuttles',
'pressdesc|state:shuttle': '{count} shuttles',
'pressdesc|editmode_change-ends': 'manual edit: change ends',
'pressdesc|state:editmode_change-ends': '{left_team} left,\n{right_team} right',
'pressdesc|editmode_change-serve': 'manual edit: serving team',
'pressdesc|state:editmode_change-serve': '{player} to serve',
'pressdesc|editmode_switch-sides': 'manual edit: position',
'pressdesc|state:editmode_switch-sides': '{left_player} left,\n{right_player} right',
'pressdesc|editmode_set-finished_games': 'manual edit: score',
'pressdesc|editmode_set-score': 'manual edit: score',
'pressdesc|yellow-card': 'yellow card',
'pressdesc|state:yellow-card': '{player} warned',
'pressdesc|red-card': 'red card',
'pressdesc|state:red-card': 'faulted {player}, {score_str}',
'pressdesc|referee': 'referee',
'pressdesc|note': 'note',
'pressdesc|postgame-confirm': 'game confirmation',
'pressdesc|postmatch-confirm': 'match confirmation',
'pressdesc|postinterval-confirm': 'Interval end',
'pressdesc|retired': '{player} retired',
'pressdesc|state:retired': '{winner} wins {score_str}',
'pressdesc|disqualified': 'black card {player}',
'pressdesc|state:disqualified': '{winner} wins {score_str}',
'pressdesc|court_id': 'Court {court_id}\n',
'pressdesc|umpire_name': 'Umpire: {umpire_name}\n',
'pressdesc|service_judge_name': 'Service judge: {service_judge_name}\n',

'order:header': 'Match order',
'order:back': 'Back',
'order:optimize': 'Optimize',
'order:reset': 'Reset',
'order:print': 'Print',
'order:ignore match': 'ignore match',
'order:manual network message': 'Manually created event',
'order:add:match': 'add match',
'order:add:placeholder': 'Singles: name',
'order:add:placeholder2': 'Doubles: name / name',
'order:add:discipline': 'discipline',
'order:rm:prompt': 'Really delete match {match_name}?',
'order:import matches': 'Import',
'order:import:error': 'Import failed: {msg}',
'order:import:placeholder': 'https://www.tournamentsoftware.com/sport/matches.aspx?...',

'order:add:invalid': 'Number of players must be the same on both sides. Player names are separated by a slash(/).',
'staticnet:switch back message': 'Imported event. Changes here will not be transmitted! ',
'staticnet:switch back button': 'Switch to live {service}',
'staticnet:error': 'Download error ({code})',
'staticnet:service_name': 'network demo',

'importexport:invalid JSON': 'Invalid JSON: {msg}',
'importexport:not an export file': 'This file is not a bup-export file!',
'importexport:export sent': 'Thanks! Export file sent.',

'weekday|0': 'Sun',
'weekday|1': 'Mon',
'weekday|2': 'Tue',
'weekday|3': 'Wed',
'weekday|4': 'Thu',
'weekday|5': 'Fri',
'weekday|6': 'Sat',

'displaymode:style': 'style:',
'displaymode|top+list': 'current/list',
'displaymode|oncourt': 'court score',
'displaymode|international': 'international',
'displaymode|teamcourt': 'team display',
'displaymode|2court': '2 courts',
'displaymode|castall': 'greenscreen (all courts)',
'displaymode|andre': 'André',
'displaymode|tim': 'Tim',
'displaymode|onlyplayers': 'players only',
'displaymode|onlyscore': 'score only',
'displaymode|clubplayers': 'team + players',
'displaymode|clubplayerslr': 'team + players (left / right)',
'displaymode|tournament_overview': 'tournament overview',
'displaymode|stripes': 'stripes',
'displaymode:court_id': 'court:',
'displaymode:court_id:loading': 'loading ...',
'displaymode:reverse_order': 'reverse court order',
'displaymode:no courts': 'No court information available',
'displaymode:scale': 'Scale:',
'displaymode:colors': 'Colors:',
'displaymode:use team colors': 'use team colors',

'liveaw:lost connection': 'Reconnecting ...',

'refmode:lost connection': 'Reconnecting ...',
'refmode:status:disabled': 'Disabled',
'refmode:status:enabled': 'Enabled',
'refmode:status:connected to hub': 'connected to hub...',
'refmode:status:welcomed': 'connected to hub',
'refmode:status:client.connected': 'Connected to {fp}',
'refmode:status:referee.connected': 'Connected to {all_str}',
'refmode:keygen failed': 'Key generation failed: {message}',
'refmode:generating key': 'Generating key ...',
'refmode:client:no_referees': 'No connected referees',
'refmode:client:no_more_referees': 'All connected referees have been authenticated.',
'refmode:client:select_referee': 'Connect to referee ...',
'refmode:client:no_select_referee': 'Hide referee list',
'refmode:status:referee.registered': 'Registered at hub',
'refmode:client:paired': 'Authenticated referees:',
'refmode:client:paired:none': 'No referees autenticated.',
'refmode:referee:paired:none': 'No connections (yet).\n\nTo connect a tablet, perform the following steps on the tablet:\n1. Activate "Referee" in the settings.\n2. Click "Connect to referee".\n3. Select {ref_fp}.',
'refmode:referee:subscribe': 'Subscribe',
'refmode:referee:refresh': 'Refresh',
'refmode:referee:kill': 'Disconnect',
'refmode:referee:kill prompt': 'Disconnect {client} from all referees?',
'refmode:referee:push:activate': 'start push mode',
'refmode:referee:push:deactivate': 'end push mode',
'refmode:referee:battery': 'Battery: ',
'refmode:referee:battery:na': 'N/A',
'refmode:referee:battery:charging': 'Charging ({percent}%{duration})',
'refmode:referee:battery:discharging': '{percent}%{duration} remaining',
'refmode:referee:set': 'Set',
'refmode:referee:cancel': 'Cancel',
'refmode:referee:edit': 'Edit',
'refmode:referee:umpire_name': 'Umpire: ',
'refmode:referee:service_judge_name': 'Service judge: ',
'refmode:referee:swap TOs': 'Tauschen',
'refmode:referee:court': 'Court: ',
'refmode:referee:match': 'Match: ',
'refmode:referee:back from settings': 'Back to referee overview',
'refmode:referee:no event': '- No event -',
'refmode:referee:no event matches': 'No match information',
'refmode:referee:no matches': 'No matches available. Connect to a tablet.',
'refmode:referee:different_event': 'Different event: {event_name}',
'refmode:referee:updated_event': 'Updated ({time})',
'refmode:referee:espouse event': 'Espouse event',
'refmode:referee:change match': 'Set match',
'refmode:referee:change court': 'Set court',
'refmode:referee:change display style': 'Set style',
'refmode:referee:outdated bup': 'Outdated bup version: {bup_version}',
'refmode:referee:no event on client': 'No event associated',
'refmode:referee:generating key': 'Generating referee key ...',
'refmode:referee:forwards clock': 'The internal clock of the tablet is early by {diff} minutes!',
'refmode:referee:backwards clock': 'The internal clock of the tablet is late by {diff} minutes!',

'urlimport:error': 'Import failed: {msg}',
'urlimport:staticnet_message': 'Imported event',

'editmode:fix_time': 'Stop time at',

'dads:label': 'Ads:',
'dads:configure': 'Configure',
'dads|none': 'none',
'dads|always': 'active',
'dads|periodic': 'periodical',
'dads|until': 'until ..',
'dads|intervals': 'during intervals',
'dads:heading': 'Ads',
'dads:mode': 'Mode:',
'dads:add image': 'Add Image',
'dads:add image url': 'Add Image URL',
'dads:add rg': 'Add announcement text',
'dads:back': 'Back',
'dads:quota': 'Ad could not be saved: Insufficient storage space available. Try using URLs instead of image files.',
'dads|interval': 'change interval (s):',
'dads|dtime': 'score duration (s):',
'dads|atime': 'ad duration (s):',
'dads:utime': 'Time:',
'dads:active': 'active',
};

/*@DEV*/
if ((typeof module !== 'undefined') && (typeof require !== 'undefined')) {
	module.exports = i18n_en;
}
/*/@DEV*/