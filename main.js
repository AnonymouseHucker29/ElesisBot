const { config } = require('dotenv');
const { ActivityType, Client, GatewayIntentBits, Presence } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activities: [{ name: 'with your heart </3', type: ActivityType.Playing }],
        status: 'idle',
    });

    /** Use only if you want to change the bot's username
     * 
     *  client.user.setUsername('Elesis Sieghart')
     *      .then(user => console.log(`My new username is ${user.username}`))
     *      .catch(console.error);
    **/
});

client.login(process.env.DISCORD_CLIENT_TOKEN);

client.on('messageCreate', message => {

    // variable that prevents the bot from looping itself
    const bot = message.author.bot;

    if (message.content.toLowerCase().includes('hello') && !bot) {
        message.reply(`Hello, ${message.author}!`);
    } else if (message.content.toLowerCase().includes('yawa') && !bot) {
        message.reply(`Oops, ayaw sigeg pamalikas ${message.author}!`);
    }
});
