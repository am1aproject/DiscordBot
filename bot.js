var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "MjgzOTYyMTA5ODcwNjA0Mjg5.C6GEAA.SfHmiOvZUCLZrirGc_WAfAu2rUs",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "?ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "?faggot") {
        bot.sendMessage({
            to: channelID,
            message: "<@" + userID + "> is a faggot"
        });
    }
});