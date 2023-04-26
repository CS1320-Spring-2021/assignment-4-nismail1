// const express = require('express');
// const uuid = require('uuid');
// const router = express.Router();

// const members = [
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@gmail.com',
//       status: 'active'
//     },
//     {
//       id: 2,
//       name: 'Bob Williams',
//       email: 'bob@gmail.com',
//       status: 'inactive'
//     },
//     {
//       id: 3,
//       name: 'Shannon Jackson',
//       email: 'shannon@gmail.com',
//       status: 'active'
//     }
//   ];

// const idFilter = req => member => member.id === parseInt(req.params.id);

// // Gets All Members
// router.get('/', (req, res) => res.json(members));

// // Get Single Member
// router.get('/:id', (req, res) => {
//   const found = members.some(idFilter(req));

//   if (found) {
//     res.json(members.filter(idFilter(req)));
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//   }
// });

// // Create Member
// router.post('/', (req, res) => {
//   const newMember = {
//     ...req.body,
//     id: uuid.v4(),
//     name: req.body.name,
//     email:req.body.email,
//     status: 'active'
//   };

//   if (!newMember.name || !newMember.email) {
//     return res.status(400).json({ msg: 'Please include a name and email' });
//   }

//   members.push(newMember);
//   res.json(members);
//   // res.redirect('/');
// });

// // Update Member
// // router.put('/:id', (req, res) => {
// //   const found = members.some(idFilter(req));

// //   if (found) {
// //     members.forEach((member, i) => {
// //       if (idFilter(req)(member)) {

// //         const updMember = {...member, ...req.body};
// //         members[i] = updMember
// //         res.json({ msg: 'Member updated', updMember });
// //       }
// //     });
// //   } else {
// //     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
// //   }
// // });



// module.exports = router;
const chatroomlist = [
    {
      id: 1,
      name: 'Everyone',
     
    },
    {
      id: 2,
      name: 'Star Wars',
     
    },
    {
      id: 3,
      name: 'We <3 Candy',
      
    }
  ];
  module.exports = chatroomlist;