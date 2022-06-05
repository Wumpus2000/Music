const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('BLURPLE');

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }))
        embed.setDescription('<:CircleMusic:955986717536563210> **Music**\n<:CircleBlank:955671552265965609><:CircleBack:956031533041483786> back (previous).\n<:CircleBlank:955671552265965609><:CircleNP:960391123325583430> clear (cq).\n<:CircleBlank:955671552265965609><:CircleSparkle:949759673291124806> filter.\n<:CircleBlank:955671552265965609><:CircleLoop:956015497579724800> loop (lp, repeat.\n<:CircleBlank:955671552265965609><:CircleDisc:959537922275680257> nowplaying (np).\n<:CircleBlank:955671552265965609><:CirclePause:949765540564586616> pause.\n<:CircleBlank:955671552265965609><:CirclePlay:956032213009457202> play (p).\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> progress (pbar) \n<:CircleBlank:955671552265965609><:CircleQueue:956015497697193994> queue (q)\n<:CircleBlank:955671552265965609><:CircleLast:960396769957646387> resume (rs)\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> save (sv)\n<:CircleBlank:955671552265965609><:CircleSearch:957042683749208094> search (sh)\n<:CircleBlank:955671552265965609><:CircleShuffle:957048215629332501> shuffle (sh)\n<:CircleBlank:955671552265965609><:CircleSkipTo:960715798886903908> skip (sk).\n<:CircleBlank:955671552265965609><:CircleStop:960390101052047420> stop (dc).\n<:CircleBlank:955671552265965609><:CircleVolume:956015497625870376> volume (vol).\n<:CircleBlank:955671552265965609>\n<:CirclePen:959538775317434449> **info**\n<:CircleBlank:955671552265965609><:CircleRole:949759672976547871> help \n<:CircleBlank:955671552265965609><:CircleServer:957045722778329158> ping \n<:CircleBlank:955671552265965609>');
        embed.setTimestamp();
        embed.setImage("https://cdn.discordapp.com/attachments/919446087247478795/982882983956602920/valorant-news-datamine-remake-rematch.png")

        message.channel.send({ embeds: [embed] });
    },
};