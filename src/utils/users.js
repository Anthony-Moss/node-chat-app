const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser =  users.find((user) => {
        return user.room === room && user.username === username && user.id === id
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is already in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return {
        user
    }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }

}

const getUser = (id) => {
    // Check for user
    const user = users.find((user) => user.id === id)

    // Validate user
    if (!user) {
        return {
            error: 'User not found'
        }
    }
    // return user
    return user
}

const getUsersInRoom = (room) => {
    // check for users in room
    const allUsers = users.filter((user) => user.room === room)

    // Validate  user
    if (!allUsers) {
        return {
            error: 'No users in this room'
        }
    }
    // Return users
    return allUsers
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}