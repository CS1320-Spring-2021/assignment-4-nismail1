// import dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const path = require('path');

// import handlers
const homeHandler = require('./controllers/home.js');
const roomHandler = require('./controllers/room.js');

const app = express();
const port = 8080;
const chatrooms = require('./Chatrooms.js');
const messages = require('./Messages.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// If you choose not to use handlebars as template engine, you can safely delete the following part and use your own way to render content
// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.post('/create', (req,res)=>{

    const newChatroom = {
        name: req.body.name
    };
    chatrooms.push(newChatroom)
    newMessagesEntry = {
        roomName: req.body.name,
        entryMessages: []
    }
    messages.push(newMessagesEntry)
   
    res.redirect('/')
})

 app.post('/:roomName/sendMessage', (req, res)=>{
 
        messages.push({text:req.body.body,name:req.body.name});

    res.redirect('/'+ req.params.roomName);
}
)




// TODO: Add server side code
// Create controller handlers to handle requests at each endpoint
app.get('/', homeHandler.getHome);
app.get('/:roomName', roomHandler.getRoom);

app.get('/:roomName/messages', (req, res) => {

    res.json(messages)
    console.log('checking', messages)
});





// NOTE: This is the sample server.js code we provided, feel free to change the structures

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

