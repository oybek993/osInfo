const router = require('express').Router();
const Info = require('../Info');

router.post('/sendInfo', async (req, res) => {
    // Create a new info
    const info = new Info({
        arch: req.body.arch,
        platform: req.body.platform,
        freemem: req.body.freemem,
        totalmem: req.body.totalmem,
        homedir: req.body.homedir,
        uptime: req.body.uptime,
        hostname: req.body.hostname,
        cpu0: req.body.cpu0,
        cpu1: req.body.cpu1
    });
    try {
        const savedInfo = await info.save();
        res.send({ info: info._id });
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;