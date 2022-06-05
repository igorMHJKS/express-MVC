const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')


// GET - pegar dados, ou seja, leitura
// POST - Cadastrar/salvar dados
//PATCH-PUT - atualizar dados 
//DELETE deltart dados
router.get('/',UserController.index);
router.get('/:id/', UserController.show);
router.post('/', UserController.store);
router.patch('/:id/', UserController.update);
router.delete('/:id/', UserController.delete)

module.exports = router;