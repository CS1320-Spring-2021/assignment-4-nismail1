// Controller handler to handle functionality in room page

const roomGenerator = require('../util/roomIdGenerator.js');
const messages = require('../Messages.js');

const myMessages = require('../server.js');

// Example for handle a get request at '/:roomName' endpoint.
function getRoom(request, response){
    //var passedVariable = request.query.newSession;
    //console.log(passedVariable)
    //console.log(request)
    // if (request.query==null){
    //     console.log(request.query)
    // }
    // else {
    //     console.log(request.query)
    // }
    // messages = []

    // messages.forEach(msg => {
    //     if(request.params.roomName == msg.roomName) {
    //         myMessages = msg.entryMessages
    //     }
    // })

    
    response.render('room', {title: 'chatroom', roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator()});
}

module.exports = {
    getRoom
};