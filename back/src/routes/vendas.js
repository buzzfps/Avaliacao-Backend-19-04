const express = require('express');
const router = express.Router();

const Vendas = require('../controllers/vendas')

router.post ('/criarvenda', Vendas.criarVendas)
router.get ('/listarvendas', Vendas.mostrarVendas)
router.get ('/listarvenda/:id', Vendas.mostrarVendas)
router.put ('/alterarvenda', Vendas.alterarVendas)
router.delete('/excluirvenda/:id', Vendas.excluirVendas)

module.exports = router