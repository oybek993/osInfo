const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const os = require('os');
app.use(cors());



// Connect to DB

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to db!')
);
// Middleware
app.use(express.json());


// import Routes
const infoRoute = require('./routes/info');
// on the request to root (localhost:5000/)
app.get('/api/getInfo', (req, res) => {
    res.send({
        platform: os.platform(),
        arch: os.arch(),
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        homedir: os.homedir(),
        uptime: os.uptime(),
        hostname: os.hostname(),
        cpus: os.cpus()
    })

});

// Route middlewares
app.use('/api', infoRoute);

// start the server in the port 3000 !
app.listen(5000, () => {
    console.log('Server running...');
});
