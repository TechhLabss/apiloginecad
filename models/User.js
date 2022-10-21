const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value=> {
            if(!validator.isEmail(value)){
                throw new Error({error: 'Endereço de Email Invalido'})
            }
        }
    },
    senha: {
        type: String,
        required: true,
        minLengh: 5,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function (next){
    //hashing password
    const user = this
    if( user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
})

userSchema.statics.findByCredentials = async (email,password) => {

    const user = await User.findOne({email})
    if(!user){
        throw new Error({error: "Credenciais de Login Invalidas"})
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch){
        throw new Error({error: "Credenciais de Login Invalidas"})
    }
    return user

}
const User = mongoose.model('User', userSchema)

module.exports = User