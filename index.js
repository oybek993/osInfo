const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const os = require('os');
const path = require('path')
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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html')); // relative path
    })
}

// start the server in the port 3000 !
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server running...');
});
