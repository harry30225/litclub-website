const express=require('express');
const router=express.Router();

// GET
// api/admin
// public route
router.get('/',(req,res)=>res.send('Admin route'));

module.exports=router;