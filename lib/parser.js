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

module.exports = {
    pts,
    ast,
    reb
};