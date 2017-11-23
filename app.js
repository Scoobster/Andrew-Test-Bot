var restify = require('restify'); 
var builder = require('botbuilder'); 

// Setup Restify Server 
var server = restify.createServer(); 
server.listen(process.env.port || process.env.PORT || 3978, function () { 
    console.log('%s listening to %s', server.name, server.url); 
}); 
 
// Create chat connector for communicating with the Bot Framework Service 
var connector = new builder.ChatConnector({ 
    appId: 9019cbc8-8055-4180-8f2e-53051ea28deb, 
    appPassword: ijrQ7275!vzheCZPZMS1%=$ 
}); 
 
// Listen for messages from users   
server.post('/api/messages', connector.listen()); 

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:') 
var bot = new builder.UniversalBot(connector, function (session) { 
    session.send("You said: " + session.message.text); 
});