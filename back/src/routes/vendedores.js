const express = require('express');
const router = express.Router();

const Vendedores = require('../controllers/vendedores')

router.post ('/criarvendedor', Vendedores.criarVendedor)
router.get ('/mostrarvendedores', Vendedores.mostrarVendedores)
router.get ('/mostrarvendedor/:id', Vendedores.mostrarVendedores)
router.put ('/alterarvendedor', Vendedores.alterarVendedores)
router.delete('/excluirvendedor/:id', Vendedores.excluirVendedores)

module.exports = router