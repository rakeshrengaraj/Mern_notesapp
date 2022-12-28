const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require('../util/generateToken')


const registerUser = asyncHandler(async (req, res) => {
  const { email, first_name, last_name, password, profilePic, date_of_birth } =
    req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    email,
    first_name,
    last_name,
    password,
    profilePic,
    date_of_birth
  });

  if(user){
    res.status(201).json({
        _id: user._id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        profilePic: user.profilePic,
        date_of_birth: user.date_of_birth,
        token: generateToken(user._id)
    })
  }else{
    res.status(500)
    throw new Error("Something went wrong, user was not created")
  }

});

const authLogin = asyncHandler(async(req,res) => {
    const { email, password} = req.body
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            date_of_birth: user.date_of_birth,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
})


module.exports = { registerUser, authLogin }