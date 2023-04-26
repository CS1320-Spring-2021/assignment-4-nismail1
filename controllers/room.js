// // Controller handler to handle functionality in room page

// const roomGenerator = require('../util/roomIdGenerator.js');

// // Example for handle a get request at '/:roomName' endpoint.
// function getRoom(request, response){
//     response.render('room', {title: 'chatroom', roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator()});
// }

// module.exports = {
//     getRoom
// };

// Controller handler to handle functionality in room page

const roomGenerator = require('../util/roomIdGenerator.js');
const messages = require('./chat.js');
const myMessages = require('../server.js');
// Example for handle a get request at '/:roomName' endpoint.
function getRoom(request, response){
    // myMessages = []

    // messages.forEach(msg => {
    //     if(request.params.roomName == msg.roomName) {
    //         myMessages = msg.entryMessages
    //     }
    // })

    
    response.render('room', {title: 'chatroom', roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator(), msg:messages});
}

module.exports = {
    getRoom
};