const userService = require('../services/user');
const { errFormat, successFormat } = require('./../../libs/outputFormater');

const save = async(req, res) => {
    try {
        // custom validation can be added here based

        // save
        const data = await userService.saveUser(req.body);
        return res.send(successFormat(data));
    } catch (err) {
        res.statusCode = 500;
        return res.send(errFormat('US-CO-SAVE-10', err.message));
    }
}

const view = async(req, res) => {
    try {
        // custom validation can be added here based

        return res.send(await userService.getUsers());
    } catch (err) {
        res.statusCode = 500;
        return res.send(errFormat('US-CO-view-10', err.message));
    }
}


const update = async(req, res) => {
    try {
        // custom validation can be added here based

        // update logic
        const data = await userService.updateUser(req.params.id, req.body);
        return res.send(successFormat(data));
    } catch (err) {
        res.statusCode = 500;
        return res.send(errFormat('US-CO-update-10', err.message));
    }
}

const del = async(req, res) => {
    try {
        // custom validation can be added here based
        // delete logic
        return res.send(await userService.deleteUser(req.params.id));
    } catch (err) {
        res.statusCode = 500;
        return res.send(errFormat('US-CO-del-10', err.message));
    }
}


module.exports = {
    save,
    view,
    update,
    del
};