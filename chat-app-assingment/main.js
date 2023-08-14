const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (request, response, next) => {
    response.status(200).send('<h1>Enter your userName</h1> <form method="POST" action="/login" ><input name="userName" type="text" /> <input name="message" type="text" /> <button type="submit">enter In Chatroom</button> </form>');
});

app.post('/login', (request, response, next) => {
    if (request.body) {
        console.log(request.body);

        const userName = request.body.userName;
        const message = request.body.message;

        // Append the message to chat.txt
        fs.appendFile('chat.txt', `${userName}: ${message}\n`, (err) => {
            if (err) {
                console.log(err);
            } else {
                // Read the updated chat.txt and send it as a response
                fs.readFile('chat.txt', 'utf-8', (readErr, data) => {
                    if (readErr) {
                        console.log(readErr);
                    } else {
                        response.send(`<h3>${data}</h3> <h1>Enter your userName</h1> <form method="POST" action="/login" ><input name="userName" type="text" /> <input name="message" type="text" /> <button type="submit">enter In Chatroom</button> </form>`);
                    }
                });
            }
        });
    }
});

app.listen(2000, () => {
    console.log('Server is running on port 2000');
});
