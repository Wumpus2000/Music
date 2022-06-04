module.exports = {
    app: {
        px: '.',
        playing: 'Wumpus World'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Server DJ',
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
