const express = require("express")

const {protect, adminOnly} = require("../middlewares/authMiddleware")


const router = express.Router()
const {
    getDashboardData, 
    getUserDashboardData,
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist
} = require('../controllers/taskController')

router.get ("/dashboard-data", protect, getDashboardData); 
router.get ("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); // Get all tasks (Admin: all, User: assigned) 
router.get ("/:id", protect, getTaskById); // Get task by ID 
router.post("/", protect, adminOnly, createTask); // Create a task (Admin onLy) 
router.put("/:id", protect, updateTask); // Update task details
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a task (Admin only) 
router.put ("/:id/status", protect, updateTaskStatus); // Update task status 
router.put ("/:id/todo", protect, updateTaskChecklist); // Update task checklist

module.exports = router