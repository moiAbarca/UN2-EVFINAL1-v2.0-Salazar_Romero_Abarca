var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var tareas = mongoose.model('tareas');

//GET método para listar tareas...haaa que funcione..jajajajaj
router.get('/tareas', function (req, res, next) {
  tareas.find(function (err, tareas) {
    if(err){return next(err)}
    res.json(tareas)
  })
})

//POST agregar tarea
router.post('/tarea', function(req, res, next){
  var tarea = new tareas(req.body);

  tarea.save(function (err, tarea) {
    if (err){return next(err)}
    res.json(tarea);
  })
})

//PUT actulizar
router.put('/tarea/:id', function (req, res) {
  tareas.findById(req.params.id, function (err, tarea) {
    tarea.nombre = req.body.nombre;

    tarea.save(function (err) {
      if (err){res.send(err)}
      res.json(tarea);
    })
  })
})

//DEleTE
router.delete('/tarea/:id', function (req, res) {
  tareas.findByIdAndRemove(req.params.id, function (err) {
    if (err){res.send(err)}
    res.json({message: 'Se ha eliminado la tarea'})
  })
})

module.exports = router;
