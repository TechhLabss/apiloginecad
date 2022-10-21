const { response } = require('express')
const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/', async(req, res)=>{
    res.status(200).send("Welcome")
})

router.post('/createUser', async (req, res)=>{
    //Create a new user
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).send({user})
    } catch(error){
        res.status(400).send({error})
    }
})

router.post('/userLogin', async (req, res)=>{
    try{
        const {email, senha} = req.body
        const user = await User.findByCredentials(email, senha)
        if(!user){
            return res.status(401).send({error: "Falha ao fazer login! Cheque suas credenciais"})
        }
        res.status(200).send({user})
    } catch(error){
        res.status(400).send({error})
    }
})

module.exports = router