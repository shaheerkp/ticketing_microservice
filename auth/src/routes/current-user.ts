import express from "express";

const router=express.Router()


router.get('/api/users/currentuser',(req,res)=>{
    res.send("current user not available")

})

export {router as currentuserRouter}