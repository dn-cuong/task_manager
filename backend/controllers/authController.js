const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Generate a JWT token
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};


const registerUser = async (req, res) => {
}

const loginUser = async (req, res) => {
   
}

const getUserProfile = async (req, res) => {
   
}

const updateUserProfile = async (req, res) => {

}

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };
