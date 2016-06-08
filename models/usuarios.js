/**
 * Created by mOi on 05-06-16.
 */
var mongoose = require('mongoose');
var UsuariosSchema = new mongoose.Schema({
    tipo: String,
    contraseña : String
});

mongoose.model('Usuarios', UsuariosSchema);