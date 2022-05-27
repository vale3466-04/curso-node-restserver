
const {Router} = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);// cierto ENDPOINT llamado "api".

router.put('/:id', usuariosPut);// cierto ENDPOINT llamado "api".

router.post('/', usuariosPost);// cierto ENDPOINT llamado "api".

router.patch('/', usuariosPatch);// cierto ENDPOINT llamado "api".

router.delete('/', usuariosDelete);// cierto ENDPOINT llamado "api".





module.exports = router;