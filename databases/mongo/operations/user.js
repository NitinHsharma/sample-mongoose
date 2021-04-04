const { userModel } = require('../models/user');


const getUsers = async () => {
    //checking township Name is already exist or not
    return await userModel.find({});
}

const createUser = async (data) => {

    //inserting data into adminUser collection
    const newData = new userModel(data)

    const result = await newData.save();
    if (!result) {
        throw new Error('Mongodb error');
    }
    return result;
}

const deleteUser = async (userId) => {
    return await userModel.findByIdAndDelete(userId)
}

const updateUserById = async (id, data) => {
    const result = await userModel.updateOne({ _id: id }, { ...data }, { runValidators: true });
    if (!result) {
        throw new Error("user not updated")
    }
    return;
}



module.exports = {
    getUsers,
    createUser,
    updateUserById,
    deleteUser
  }
  