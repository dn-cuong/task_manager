import React , {useState, useEffect} from "react"
import axiosInstance from "../../utils/axiosinstance"
import { API_PATHS } from "../../utils/apiPaths" 
import {LuUsers} from "react-icons/lu"

const SelectUsers = ({selectedUsers, setSelectedUsers}) => {
    const [allUsers, setAllUsers] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tempSelectedUsers, setTempSelectedUsers] = useState([])

    const getAllUsers = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS)
            if (response.data?.length > 0) {
                setAllUsers(response.data)
            } 
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }

    const toogleUserSelection = (userId) => {
        setTempSelectedUsers((prev) => 
            prev.includes(userId) 
            ? prev.filter((id) => id !== userId)
            : [...prev, userId]
        )
    }

    const handleAssign = () => {
        setSelectedUsers(tempSelectedUsers)
        setIsModalOpen(false)
    }

    const selectedUserAvatars = allUsers.filter((user) => selectedUsers.includes(user._id)).map((user) => user.profileImageUrl)

    useEffect(() => {
        if (selectedUsers.length === 0) {
            setTempSelectedUsers([])
        }

        return () => {}
    }, [selectedUsers])



    return (
        <div className="space-y-4 mt-2">

        {selectedUserAvatars.length === 0 && (
            <button className="card-btn" onClick={() => setIsModalOpen(true)}>
                <LuUsers className="text-sm"/> Add Members
            </button>
        )}

        </div>
    )
}

export default SelectUsers