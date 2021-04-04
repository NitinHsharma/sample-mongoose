const UserController = require('./api/users/controller');


module.exports = function(app) {

    /*
     *
     * User Routes
     * 
     */

    app.get('/users', UserController.view);

    app.post('/user', validate('user', 'userSave'), UserController.save);

    app.put('/user/:id', validate('user', 'userUpdate'), UserController.update);

    app.delete('/user/:id', validate('user', 'userDelete'), UserController.del);


}