module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? <:Cross:979517331334123530>`);

        queue.destroy();

        message.channel.send(`Music stopped into this server, see you next time <:Checked:979517331262828634>`);
    },
};