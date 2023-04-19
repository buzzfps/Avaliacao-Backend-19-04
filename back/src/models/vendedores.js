class Vendedores {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.matricula = i.matricula

    }
    create() {
        return `INSERT INTO vendedores VALUE(default,'${this.nome}',${this.matricula})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendedores`
        else
            return `SELECT * FROM vendedores WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE vendedores SET nome = '${this.nome}', matricula = ${this.matricula} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM vendedores WHERE id = ${this.id}`
    }
}

module.exports = Vendedores 