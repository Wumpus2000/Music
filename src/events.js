player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Started playing ${track.title} in **${queue.connection.channel.name}** <:HeadPhone:982769267105730590>`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Track ${track.title} added in the queue <:Checked:979517331262828634>`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('I was manually disconnected from the voice channel, clearing queue... <:Cross:979517331334123530>');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nobody is in the voice channel, leaving the voice channel... <:Cross:979517331334123530>');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('I finished reading the whole queue <:Checked:979517331262828634>');
});