const { config } = require('dotenv');
const { Client, GatewayIntentBits, Presence } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activities: [{ name: 'with your heart </3' }],
        status: 'idle',
    });

});

client.login(process.env.DISCORD_CLIENT_TOKEN);

client.on('messageCreate', message => {
    if (message.content === 'Hello') {
        message.reply(`Hello, ${message.author}`);
    }
});
