const express = require('express');
const router = express.Router();
const PopChar = require('../models/PopChar');

// Get back all the posts
router.get('/', async (req, res) => {
    try{
        const popChars = await PopChar.find({ethnicValue: "11111"});
        res.json(popChars);
    }catch(err){
        res.json({message: err});
    }
});

// submits post
router.post('/', async (req, res) => {
    const popChar = new PopChar({
        ethnicLevel: req.body.ethnicLevel,
        ethnicValue: req.body.ethnicValue,
        birthCode: req.body.birthCode,
        count: req.body.count,
        percentage: req.body.percentage,
        year: req.body.year
    });

    try{
    const savedPopChar = await popChar.save();
    res.json(savedPopChar);
    }catch(err){
        res.json({message: err});
    }

});


module.exports = router;