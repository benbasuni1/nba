const axios = require('axios');
const api = require('../config/api-key.js');

var getTeamStandings = () => axios.get('https://erikberg.com/nba/standings.json');

var getTeamStats = teams => {
   return axios.get('https://erikberg.com/nba/team-stats.json', {
       headers: {Authorization: api},
       params: {team_id: teams[29].team_id}
    });
    // return Promise.all(teams.map(team => {
    //     var team_id = team.team_id;
    //     axios.get('https://erikberg.com/nba/team-stats.json', {
    //         headers: { Authorization: api },
    //         params: { team_id: team_id }
    //     }).catch(err => console.log(err));
    // })).catch(err => console.log(err));
};

var getPTSLeaders = () => {
    return axios.get(
        'http://stats.nba.com/stats/leagueleaders', {
        params: {
            "LeagueID"     : '00',
            "SeasonType"   : 'Regular Season',
            "PerMode"      : 'Totals',
            "StatCategory" : 'PTS',
            "Season"       : '2017-18',
            "Scope"        : 'S',
            "ActiveFlag"   : null
        }
    });
};

var getASTLeaders = () => {
    return axios.get(
        'http://stats.nba.com/stats/leagueleaders', {
        params: {
            "LeagueID"     : '00',
            "SeasonType"   : 'Regular Season',
            "PerMode"      : 'Totals',
            "StatCategory" : 'AST',
            "Season"       : '2017-18',
            "Scope"        : 'S',
            "ActiveFlag"   : null
        }
    });
};

var getREBLeaders = () => {
    return axios.get(
        'http://stats.nba.com/stats/leagueleaders', {
        params: {
            "LeagueID"     : '00',
            "SeasonType"   : 'Regular Season',
            "PerMode"      : 'Totals',
            "StatCategory" : 'REB',
            "Season"       : '2017-18',
            "Scope"        : 'S',
            "ActiveFlag"   : null
        }
    });
};

module.exports = {
    getPTSLeaders,
    getASTLeaders,
    getREBLeaders,
    getTeamStandings,
    getTeamStats
};