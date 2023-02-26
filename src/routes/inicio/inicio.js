const express = require('express');
const router = express.Router();
const dbConnection = require('../../database');

router.get("/" , (req,res)=>{
    res.render("inicioSession/inicio");
});

module.exports = router;