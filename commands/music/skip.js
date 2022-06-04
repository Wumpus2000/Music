module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? <:Cross:979517331334123530>`);

        const success = queue.skip();

        return message.channel.send(success ? `Current music ${queue.current.title} skipped <:Checked:979517331262828634>` : `Something went wrong ${message.author}... try again ? <:Cross:979517331334123530>`);
    },
};