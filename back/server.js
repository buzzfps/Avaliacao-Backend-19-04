const express = require('express');
const cors = require('cors');

const produtosRoutes = require('./src/routes/produtos.js')
const vendedoresRoutes = require('./src/routes/vendedores.js')
const vendasRoutes = require('./src/routes/vendas.js')

const app = express()
app.use(express.json())
app.use(cors())

app.use(produtosRoutes)
app.use(vendedoresRoutes)
app.use(vendasRoutes)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})