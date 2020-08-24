const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    arch: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    freemem: {
        type: Number,
        required: true
    },
    totalmem: {
        type: Number,
        required: true
    },
    homedir: {
        type: String,
        required: true
    },
    uptime: {
        type: Number,
        required: true
    },
    hostname: {
        type: String,
        required: true
    },
    cpu0: {
        type: String,
        required: true
    },
    cpu1: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Info', infoSchema)