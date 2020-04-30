const express = require('express');
const router = express.Router();
const ethnicHierarchy = require('../models/EthnicHierarchy');

// Get back all the posts
router.get('/', async (req, res) => {
    try{
        const ethnicHierarchys = await ethnicHierarchy.find();
        res.json(ethnicHierarchys);
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;