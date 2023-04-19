const con = require('../dao/connect')
const Vendedores = require('../models/vendedores')

const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Vendedores(lista[i])
    return lista
}

const criarVendedor = (req, res) => {
    let vendedores = new Vendedores(req.body)
    con.query(vendedores.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const mostrarVendedores = async (req, res) => {
    let vendedores = new Vendedores(req.params)
    con.query(vendedores.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterarVendedores = (req, res) => {
    let vendedores = new Vendedores(req.body)
    con.query(vendedores.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluirVendedores = (req, res) => {
    let vendedores = new Vendedores(req.params)
    con.query(vendedores.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}


module.exports = {
    criarVendedor,
    mostrarVendedores,
    alterarVendedores,
    excluirVendedores
}