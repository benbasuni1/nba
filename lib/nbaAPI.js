const axios = require('axios');

var getTeamStandings = () => axios.get('https://erikberg.com/nba/standings.json');

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
    getTeamStandings
};