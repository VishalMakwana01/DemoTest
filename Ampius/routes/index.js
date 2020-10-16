const express = require('express')
const router = express.Router()
const Users = require("../models/User")
const { spawn } = require('child_process');
router.post('/', async (req, res) => {
  const userIds = req.body.userId
  const pincode = req.body.pincode
  console.log(req.body)
  var dataToSend;
  const python = spawn('python', ['script.py', pincode]);
  python.stdout.on('data', function (data) {
    dataToSend = data.toString();
  });
  python.on('close', async (code) => {
    console.log(dataToSend)
    const User = new Users({
      userId: userIds,
      city: dataToSend
    })
    try {
      const savedPost = await User.save(async function (err, book) {
        if (err) return console.error(err);
        console.log(book.userId + " saved to bookstore collection.");
      });
      res.json({ 'city': dataToSend })
    } catch (err) {
      res.json({ message: err })
    }
  })

})
router.get('/list', async (req, res) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch (err) {
    res.json({ message: err })
  }
})
module.exports = router