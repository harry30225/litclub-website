const express = require('express');
const connectDB = require('./config/db');

const admin=require('./routes/api/admin');
const event=require('./routes/api/event');
const blog=require('./routes/api/blog');
const app = express();

connectDB();

// init middleware
app.use(express.json({limit: '1mb',extended:false}));
app.use(express.urlencoded({limit: '1mb'}));

app.get('/',(req,res)=> res.send('API RUNNING'));


// define routes
app.use('/api/admin',admin);
app.use('/api/event',event);
app.use('/api/blog',blog);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));