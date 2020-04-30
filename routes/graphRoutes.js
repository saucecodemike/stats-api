const express = require('express');
const router = express.Router();
// Include other models as they get created
const PopChar = require('../models/PopChar');


//These routes must all be refactored and made optimal.

router.get('/', async (req, res) => {
    try{
        const popChars = await PopChar.find({ethnicValue: "11111"});
        res.json(popChars);
    }catch(err){
        res.json({message: err});
    }
});

//example params



//Gets the total given ethnic number
router.get('/ethnictotal/:ethnicValue',async (req, res) =>{
    try{
        const popChars = await PopChar.findOne({ethnicValue: req.params.ethnicValue, birthCode: "totalStated"});

        

        res.json(popChars.count);
    
    }catch(err){
        // Better error messages
        res.json({message: err});
    
    }
});

module.exports = router;


