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

        embed.setDescription('<:CircleMusic:955986717536563210> **Music**\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> back (previous).\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> clear (cq).\n<:CircleBlank:955671552265965609><:CircleLeave:957047495769337860> filter.\n<:CircleBlank:955671552265965609><:CircleDJ:956373944313708584> loop (lp, repeat.\n<:CircleBlank:955671552265965609><:CirclePlay:956032213009457202>  **/play:** start to play lofi / radio / relaxing / ect...\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> **/punjabi:** start to play punjabi / music / radio.\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> **/spanish:** starts to play spanish music / radio.\n<:CircleBlank:955671552265965609>\n<:CirclePen:959538775317434449> **User**\n<:CircleBlank:955671552265965609><:CircleRole:949759672976547871>** /userinfo:** shows about you info.\n<:CircleBlank:955671552265965609><:CircleServer:957045722778329158> **/serverinfo:** shows the server info.\n<:CircleBlank:955671552265965609><:CircleSparkle:949759673291124806>** /avatar:** displays your / user avatar.\n<:CircleBlank:955671552265965609><:bells:970472752861544458>** /reminder:**  reminds you of what ever you put.\n<:CircleBlank:955671552265965609>\n<:question_mark:942191277963882527> **Info**\n<:CircleBlank:955671552265965609><:CircleTranscript:957402112122302524> **/help:** help center.\n<:CircleBlank:955671552265965609><:CircleBot:956378103603658802> **/invite:** shows the bot Invite link, to Invite to your server.\n<:CircleBlank:955671552265965609><:CircleSupport:956378149875253290> **/support:** if you need help / report-bugs, join our support server.\n<:CircleBlank:955671552265965609><:CircleThumbsUp:949765559703203841> **/vote:** shows wampas vote links.');
        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};