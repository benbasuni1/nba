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

module.exports = {
    pts
};