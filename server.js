// import dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const path = require('path');
const members = require('./controllers/members.js');

// import handlers
const homeHandler = require('./controllers/home.js');
const roomHandler = require('./controllers/room.js');
const chatroomlist = require('./controllers/members.js');
const messages = require('./controllers/chat.js');
let myMessages = [];
//add in moment to handle date and time
const moment = require('moment');
const { roomIdGenerator } = require('./util/roomIdGenerator.js');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// If you choose not to use handlebars as template engine, you can safely delete the following part and use your own way to render content
// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// set up stylesheets route

// TODO: Add server side code
// app.get('/', (req, res) =>
//   res.render('index', {
//     title: 'Member App',
//     members
//   })
// // res.send('HELLO WORLD');
// );
// Create controller handlers to handle requests at each endpoint


//We set up a server and client side that can communicate and send get
//and post requests in order to send information. We created the ability
//to have a text box that takes in input and that will call the post request which takes
//




app.post('/create', (req,res)=>{

    const newChatroom = {
        name: req.body.name
    };
    chatroomlist.push(newChatroom)
    // const newMessagesEntry = {
    //     roomName: req.body.name,
    //     entryMessages: []
    // }
    room = {
        listmessage: [],
        roomName: req.body.name
    }
    messages.push(room);
    res.redirect('/');
});

app.post('/:roomName/messages', (req, res)=>{

    messages.forEach(message => {
        // if(req.params.roomName == msg.roomName) {
        messsages.listmessage.append(req.body.message);
        // messages.append(req.body.message)
        // }
    });
    // myMessages = []
    // messages.forEach(msg => {
    //     if(request.params.roomName == msg.roomName) {
    //         //  myMessages = msg.entryMessages
    //         myMessages = 
    //     }
    // })
    res.redirect('/'+ req.params.roomName);

});

app.get('/', homeHandler.getHome);
app.get('/:roomName', roomHandler.getRoom);
// app.post("/controllers/members", (res,send)=>{res.send("I am called.")});
// NOTE: This is the sample server.js code we provided, feel free to change the structures
// app.use('/controllers/members', require('./controllers/members'));
app.get('/:roomName/messages', (req, res) => {
    // messages.forEach(room => {
    //     if(req.params.roomName == room.roomName){
    //         res.json(room.listmessage)
            
    //     }
    // })
    
    messages.forEach(msg=> {
        
        res.send(res.json(msg.listmessage));
    })
});


app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));