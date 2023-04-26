// Controller handler to handle functionality in home page

// Example for handle a get request at '/' endpoint.
<<<<<<< HEAD
const chatrooms = require('../Chatrooms.js')

function getHome(request, response){
  // do any work you need to do, then
  response.render('home', {title: 'home', chatrooms});

=======
const chatroomlist = require('./members.js');
function getHome(request, response){
  // do any work you need to do, then
  
  response.render('home', {title: 'home', chatroomlist});
>>>>>>> origin/master
}

module.exports = {
    getHome
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/master
