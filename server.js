const { config } = require('dotenv');
const express =require("express")
const mongoose = require('mongoose');
const User = require('./models/User');


const app = express();
mongoose.connect('mongodb://localhost:3000/userdb', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// GET all users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
  });
  
  // POST add new user
  app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.json(user);
  });
  
  // PUT edit user by ID
  app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
    res.json(user);
  });
  
  // DELETE remove user by ID
  app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted' });
  });
  
  const PORT = process.env.PORT || 3000;
 
 
  
  
  


app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});