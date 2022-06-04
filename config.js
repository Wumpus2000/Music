module.exports = {
    app: {
        px: '.',
        token: 'OTgyNzI1Njk2OTIzMjcxMTc5.GlyMyc.QP7wOFqz7WZIfep9QAK0jJemmKxBJHXnNXz4Ts',
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
