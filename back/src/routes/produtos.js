const express = require('express');
const router = express.Router();

const Produtos = require('../controllers/produtos')

router.post ('/criarproduto', Produtos.criarProdutos)
router.get ('/listarproduto', Produtos.mostrarProdutos)
router.get ('/listarproduto/:id', Produtos.mostrarProdutos)
router.put ('/alterarproduto', Produtos.alterarProdutos)
router.delete('/excluirproduto/:id', Produtos.excluirProdutos)

module.exports = router