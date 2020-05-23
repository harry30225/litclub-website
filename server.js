const express = require('express');
const connectDB = require('./config/db');

const admin=require('./routes/api/admin');
const event=require('./routes/api/event');
const app = express();

connectDB();

// init middleware
app.use(express.json({extended : false}));

app.get('/',(req,res)=> res.send('API RUNNING'));


// define routes
app.use('/api/admin',admin);
app.use('/api/event',event);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));