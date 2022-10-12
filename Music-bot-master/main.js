const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
const token = 'OTg0MTQ5NDU4MzE0OTk3Nzcw.GZer0a.kPRUrm_hrK-WL4x5tWE0m8q6Lt0IyO1i_G4Ur4'
global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login(token);