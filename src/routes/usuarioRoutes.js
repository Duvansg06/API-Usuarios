const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { validateusuario } = require('../middleware/validate');

router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.post('/', validateusuario, usuarioController.createUsuario);
router.put('/:id', validateusuario, usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
