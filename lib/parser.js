/* =============
====== API =====
================ */
var team = team => {
    return {
        rank                        : team.rank,
        won                         : team.won,
        lost                        : team.lost,
        streak                      : team.streak,
        ordinal_rank                : team.ordinal_rank,
        first_name                  : team.first_name,
        last_name                   : team.last_name,
        team_id                     : team.team_id,
        games_back                  : team.games_back,
        points_for                  : team.points_for,
        points_against              : team.points_against,
        home_won                    : team.home_won,
        home_lost                   : team.home_lost,
        away_won                    : team.away_won,
        away_lost                   : team.away_lost,
        conference_won              : team.conference_won,
        conference_lost             : team.conference_lost,
        division_won                : team.division_won,
        division_lost               : team.division_lost,
        last_five                   : team.last_five,
        last_ten                    : team.last_ten,
        conference                  : team.conference,
        division                    : team.division_won,
        playoff_seed                : team.playoff_seed,
        win_percentage              : team.win_percentage,
        points_scored_per_game      : team.points_scored_per_game,
        points_allowed_per_game     : team.points_allowed_per_game,
        point_differential          : team.point_differential,
        point_differential_per_game : team.point_differential_per_game,
        streak_type                 : team.streak_type,
        streak_total                : team.streak_total,
        games_played                : team.games_played,
    };
};

var pts = player => {
    return {
        player_id  : player[0],
        playername : player[2],
        team       : player[3],
        gp         : player[4],
        pts        : player[23],
        ppg        : (player[23] / player[4]).toFixed(1)
    };
};

var ast = player => {
    return {
        player_id  : player[0],
        playername : player[2],
        team       : player[3],
        gp         : player[4],
        ast        : player[18],
        apg        : (player[18] / player[4]).toFixed(1)
    };
};

var reb = player => {
    return {
        player_id  : player[0],
        playername : player[2],
        team       : player[3],
        gp         : player[4],
        reb        : player[17],
        rpg        : (player[17] / player[4]).toFixed(1)
    };
};

/* =============
===== OTHER ====
================ */
var eastAndWest = teams => {
    var east = [];
    var west = [];

    teams.forEach(team => {
        if (team.conference === 'EAST') east.push(team);
        if (team.conference === 'WEST') west.push(team);
    });

    return {
        east: east,
        west: west
    };
};

module.exports = {
    pts,
    ast,
    reb,
    team,
    eastAndWest
};
