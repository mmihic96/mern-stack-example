let UserModel = require('../models/User');

function getAllUsers(req, res) {
    UserModel.find({}).then((result) => {
        let response = {
            message: "Successfully listed all users!",
            result: result
        }
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({
            error: error
        });
    });
}


function createUser(req, res) {
    let data = req.body;
    let newUser = new UserModel(data);

    newUser.save().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });
}

function getUser(req, res) {
    let username = req.params.username;
    UserModel.findOne({ Username: username }).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });
}

function deleteUser(req, res) {
    let username = req.params.username;
    UserModel.deleteOne({ Username: username }).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });
}

function updateUser(req, res) {
    let data = req.body;
    UserModel.updateOne({ _id: data.id }, { $set: data }).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    })
}

module.exports.create = createUser;
module.exports.getAll = getAllUsers;
module.exports.get = getUser;
module.exports.delete = deleteUser;
module.exports.update = updateUser;