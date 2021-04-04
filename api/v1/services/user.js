const userOperation = require('../../../databases/mongo/operations/user');


class UserServices {

    // save user
    async saveUser(userDetails) {
        // can be added business logic here
        return await userOperation.createUser(userDetails);
    }

    // update user
    async updateUser(userId, userDetails) {
        // can be added business logic here

        return await userOperation.updateUserById(userId, userDetails);
    }

    // delete user
    async deleteUser(userId) {
        // can be added business logic here

        return await userOperation.deleteUser(userId);
    }

    // get users
    async getUsers() {
        // can be added business logic here

        return await userOperation.getUsers();
    }

}

module.exports = new UserServices();