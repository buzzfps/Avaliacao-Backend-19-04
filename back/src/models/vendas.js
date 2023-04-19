class Vendas {

    constructor(i) {
        this.id = i.id
        this.data = i.data
        this.quantidade = i.quantidade
        this.produtoid = i.produtoid
        this.vendedorid = i.vendedorid

    }
    create() {
        return `INSERT INTO vendas VALUE(default, CURDATE() ,${this.quantidade},${this.produtoid},${this.vendedorid})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE vendas SET quantidade = ${this.quantidade}, produtoid = ${this.produtoid}, vendedorid = ${this.vendedorid} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = ${this.id}`
    }
}

module.exports = Vendas 