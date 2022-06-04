const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? <:Cross:979517331334123530>`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`No results found ${message.author}... try again ? <:Cross:979517331334123530>`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`I can't join the voice channel ${message.author}... try again ? <:Cross:979517331334123530>`);
        }

        await message.channel.send(`Loading your ${res.playlist ? 'playlist' : 'track'}... <:HeadPhone:982769267105730590>`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};