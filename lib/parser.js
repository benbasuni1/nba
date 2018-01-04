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

var teamStats = data => {
    var team     = data[0].stats;
    var opponent = data[0].stats_opponent;
    return {
        team_id            : data[0].team.team_id,
        team_name          : data[0].team.full_name,
        games_played       : data[0].games_played,
        won                : data[0].won,
        lost               : data[0].lost,

        pts                : team.points,
        ast                : team.assists,
        tu                 : team.turnovers,
        stl                : team.steals,
        blk                : team.blocks,
        reb                : team.rebounds,
        fga                : team.field_goals_attempted,
        fgm                : team.field_goals_made,
        threesAttempted    : team.three_point_field_goals_attempted,
        threesMade         : team.three_point_field_goals_made,
        fta                : team.free_throws_attempted,
        ftm                : team.free_throws_made,
        d_reb              : team.defensive_rebounds,
        o_reb              : team.offensive_rebounds,
        pf                 : team.personal_fouls,

        vs_pts             : opponent.points,
        vs_ast             : opponent.assists,
        vs_tu              : opponent.turnovers,
        vs_stl             : opponent.steals,
        vs_blk             : opponent.blocks,
        vs_reb             : opponent.rebounds,
        vs_fga             : opponent.field_goals_attempted,
        vs_fgm             : opponent.field_goals_made,
        vs_threesAttempted : opponent.three_point_field_goals_attempted,
        vs_threesMade      : opponent.three_point_field_goals_made,
        vs_fta             : opponent.free_throws_attempted,
        vs_ftm             : opponent.free_throws_made,
        vs_d_reb           : opponent.defensive_rebounds,
        vs_o_reb           : opponent.offensive_rebounds,
        vs_pf              : opponent.personal_fouls
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
    teamStats,
    eastAndWest
};
