const axios = require('axios');

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

module.exports = {
    getPTSLeaders
};

/*         "LeagueID": "00",
        "PerMode": "Totals",
        "StatCategory": "PTS",
        "Season": "2017-18",
        "SeasonType": "Regular Season",
        "Scope": "S",
        "ActiveFlag": null */