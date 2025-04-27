const Task = require("../models/Task")
const User = require("../models/User")
const bcrypt = require("bcryptjs")

const getUsers = async (req, res) => {
    try {
        const users = await User.find({ role: "member" }).select("-password")

        const userWithTaskCounts = await Promise.all(users.map(async (user) => {
            const pendingTasks = await Task.countDocuments({
                assignedTo: user._id,
                status: "Pending",
            })
            const inProgressTasks = await Task.countDocuments({
                assignedTo: user._id,
                status: "In Progress",
            })
            const completedTasks = await Task.countDocuments({
                assignedTo: user._id,
                status: "Completed",
            })

            return {
                ...user._doc,
                pendingTasks,
                inProgressTasks,
                completedTasks,
            }
        }))

        res.status(200).json(userWithTaskCounts)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}



const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).select("-password")
        if (!user) return res.status(404).json({ message: "User not found" })

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message})
    }
}


const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message})
    }
}


module.exports = {
    getUsers, getUserById, deleteUser
}

