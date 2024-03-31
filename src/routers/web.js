const express = require('express')
const router = express.Router()
const {getHomePage,getSamplePage} = require('../controller/home')

router.get('/', getHomePage) 
router.get('/sample', getSamplePage) 


module.exports = router;