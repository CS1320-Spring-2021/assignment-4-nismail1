// Controller handler to handle functionality in home page

// Example for handle a get request at '/' endpoint.
const chatrooms = require('../Chatrooms.js')

function getHome(request, response){
  // do any work you need to do, then
  response.render('home', {title: 'home', chatrooms});

}

module.exports = {
    getHome
};