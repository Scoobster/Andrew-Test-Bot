var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: "208e45a8-30de-43c0-b57a-f1e876d58e5d",
    appPassword: "WoO1QjAsWyn73dbcHa04qWn"
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You fucking said: " + session.message.text);
    //console.log(session);
    /*var fd = new FormData(session.message.attachments);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "australiaeast.api.cognitive.microsoft.com/vision/v1.0/analyze", true);
    xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "a4caf9d-d420-4582-973d-640e644ead69");
    xhr.onload = function (data) {
        console.log("SUCCESS");
        console.log(data);
        session.send(data.description.captions[0].text);
    }
    xhr.onerror = function (data) {
        session.send("I FAILED YOU!");
    }
    xhr.send(fd);*/

});