const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? <:Cross:979517331334123530>`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('BLURPLE');
        embed.setImage(track.thumbnail)

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setTimestamp();
        embed.addField("Title", `\`\`\`\n${track.title.slice(0, 50).concat('...') || " "} \`\`\``)
        embed.addField("Views", `\`\`\`\n${track.views}\`\`\``, true)
        embed.addField("Volume", `\`\`\`\n${queue.volume}\`\`\``, true)
        embed.addField("Duration", `\`\`\`\n${trackDuration}\`\`\``, true)
        embed.addField("Loop mode", `\`\`\`\n${methods[queue.repeatMode]}\`\`\``, true)
        embed.addField("Requested by", `${track.requestedBy}`)




        const saveButton = new MessageButton();

        saveButton.setLabel('Save this track');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('PRIMARY');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};