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

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "?jop") {
        bot.sendMessage({
            to: channelID,
            message: "test"
        });
    }
});
var naamHack;

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "nigger") {
        bot.sendMessage({
            to: channelID,
            message: "Shut the fuck up <@" + userID + "> or else..."
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "HANS") {
        bot.sendMessage({
            to: channelID,
            message: "GET ZE FLAMMENWERFER!"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "<@283962109870604289>") {
        bot.sendMessage({
            to: channelID,
            message: "The fuck you say?"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "Hoi" || "Hi") {
        bot.sendMessage({
            to: channelID,
            message: "Hello <@" + userID + ">"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "mute") {
        client.mute({
            userID
        })
        
        
        bot.sendMessage({
            to: channelID,
            message: "Hello <@" + userID + ">"
        });
    }
});