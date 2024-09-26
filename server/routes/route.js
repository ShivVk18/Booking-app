const express = require('express')
const router = express.Router()

const {signUp,login, logout} = require('../controllers/Auth')


router.post('/signup',signUp)
router.post('/login',login)
router.post('/logout',logout)

//test router

router.get('/test',(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for testing"
    }) 
})

module.exports = router;