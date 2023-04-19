const con = require('../dao/connect')
const Vendas = require('../models/vendas')

const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Vendas(lista[i])
    return lista
}

const criarVendas = (req, res) => {
    let vendas = new Vendas(req.body)
    con.query(vendas.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const mostrarVendas = async (req, res) => {
    let vendas = new Vendas(req.params)
    con.query(vendas.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterarVendas = (req, res) => {
    let vendas = new Vendas(req.body)
    con.query(vendas.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluirVendas = (req, res) => {
    let vendas = new Vendas(req.params)
    con.query(vendas.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}


module.exports = {
    criarVendas,
    mostrarVendas,
    alterarVendas,
    excluirVendas
}