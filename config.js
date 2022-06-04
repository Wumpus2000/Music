module.exports = {
    app: {
        px: '.',
        token: 'OTgyNzI1Njk2OTIzMjcxMTc5.G4iWc0.lJPXH-SbqXBFZChh_1VvYu5-htbj4xHm6zZ5hY',
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
