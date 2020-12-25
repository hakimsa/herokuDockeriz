let User = new require('../models/User')

function getUser(req, res) {
    let idUser = req.params.id
    User.findById(idUser).then(
        UsuarioEncuentrado => {
            if (!UsuarioEncuentrado) {
                res.status(404).send({ accion: 'get one', mensaje: 'No existe el Usuario con ese id' })
            } else {
                res.status(200).send({ UsuarioEncuentrado })
            }
        }
    ).catch(
        err => {
            res.status(500).send({ accion: 'get one', mensaje: 'problema el obtener un usuario' })
        }
    )
}

function getUsers(req, res) {
    console.log("Listado de Usuarios")
    User.find().exec().then(
        usuarios => {
            if (!usuarios) {
                res.status(404).send({ accion: 'get all', mensaje: 'No hay Usuarios' })
            } else {
                res.status(200).send({ usuarios })
            }
        }
    ).catch(
        err => {
            res.status(500).send({ accion: 'get all', mensaje: 'problema al leer los Usuarios:' + err })
        }
    )

}

function saveUser(req, res) {
    User.save()
    let param = req.body
    res.status(200).send({ accion: "save", data: param })
    let User = new User();
    User.nivel = param.nivel
    User.email = param.email
    User.password = param.password
    User.avatar = param.avatar
    User.fecha = param.fecha

    User.save().then(
        UserGuardado => {
            res.status(200).send({ accion: 'save', data: UserGuardado })
        }
    ).catch(
        err => {
            res.status(500).send({ accion: 'save', mensaje: 'problema al guardar un Usuario:' + err })
        }
    )
}

function updateUser(req, res) {
    let idUser = req.params.id
    let param = req.body

    //{new:true}  ===>  hace que devuelva el nuevo coche insertado
    User.findByIdAndUpdate(idUser, param, { new: true }).then(
        UserActualizado => {
            res.status(200).send({ accion: 'update', data: UserActualizado })
        }
    ).catch(
        err => {
            res.status(500).send({ accion: 'update', mensaje: 'problema al actualizar un Usuario:' + err })
        }
    )
}

function deletUser(req, res) {
    var idUser = req.params.id
    User.findByIdAndDelete(idUser).then(
        UserBorrado => {
            res.status(200).send({ accion: 'delete', data: UserBorrado })
        }
    ).catch(
        err => {
            res.status(500).send({ accion: 'delete', mensaje: 'problema al borrar un Usuarios:' + err })

        }
    )
}


module.exports = { getUsers: getUsers, getUser: getUser, saveUser: saveUser, updateUser: updateUser, deletUser: deletUser }