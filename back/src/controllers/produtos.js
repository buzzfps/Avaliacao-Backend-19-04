const con = require('../dao/connect')
const Produtos = require('../models/produtos')

const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Produtos(lista[i])
    return lista
}

const criarProdutos = (req, res) => {
    let produtos = new Produtos(req.body)
    con.query(produtos.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const mostrarProdutos = async (req, res) => {
    let produtos = new Produtos(req.params)
    con.query(produtos.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterarProdutos = (req, res) => {
    let produtos = new Produtos(req.body)
    con.query(produtos.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluirProdutos = (req, res) => {
    let produtos = new Produtos(req.params)
    con.query(produtos.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}


module.exports = {
    criarProdutos,
    mostrarProdutos,
    alterarProdutos,
    excluirProdutos
}