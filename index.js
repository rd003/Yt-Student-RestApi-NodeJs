const port = process.env.PORT || 3000;
const cors= require('cors');
const express = require('express');
const connect = require('./data/connection');
const routes = require('./routes/route');
connect();
const app = express(); // middleware

app.use(express.json());
app.use('/api',routes);
app.use(cors());
app.listen(port,()=>{
    console.log(`our application is running at port ${port}`)
})