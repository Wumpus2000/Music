module.exports = {
    app: {
        px: '.',
        token: 'OTgyNzI1Njk2OTIzMjcxMTc5.GAFP3t.smVZcx2dm2Nar4XqlMpBwyDqZ5OP8AHN9ezzq0',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
