const { Router } = require('express');

const MarkerEntry = require('../models/markerEntry');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: '🚀'
    })
})

router.post('/', async (req, res, next) => {
    try {
        const markerEntry = new MarkerEntry(req.body);
        const createdEntry = await markerEntry.save();
        res.json(createdEntry)
    } catch(error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error)
    }
    console.log(req.body)
})

module.exports = router;