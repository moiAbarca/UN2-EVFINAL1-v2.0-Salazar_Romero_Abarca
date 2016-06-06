/**
 * Created by mOi on 05-06-16.
 */
var mongoose = require('mongoose');
var TareasSchema = new mongoose.Schema({
    nombre: String
});

mongoose.model('tareas', TareasSchema);

