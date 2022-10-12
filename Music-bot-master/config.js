module.exports = {
    app: {
        token: 'OTg0MTQ5NDU4MzE0OTk3Nzcw.GXTHF1.ZhWOnuhN6_Tz8IFXpPWUKHsQ6PUXytST6_Un0k',
        listening: 'on est là',
        global: false,
        guild: '883032021490864228'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
