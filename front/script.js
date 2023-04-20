const uri = 'http://localhost:3000'
const corpo = document.querySelector('#corpo');
const vendas = document.querySelector('#venda');

fetch(uri + '/mostrarvendedores', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => mostrarVendedores(resp))
    .catch(err => console.error(err));

fetch(uri + '/listarvendas', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => mostrarVendas(resp))
    .catch(err => console.error(err));



function mostrarVendedores(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let del = document.createElement('button')
        del.innerHTML = '[X]'
        del.setAttribute('onclick', `excluirVendedores('${e.id}')`)

        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.matricula
        col4.appendChild(del)

        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        corpo.appendChild(linha)
});
}

function mostrarVendas(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let del = document.createElement('button')
        del.innerHTML = '[X]'
        del.setAttribute('onclick', `excluirVenda('${e.id}')`)

        col1.innerHTML = e.data
        col2.innerHTML = e.quantidade
        col3.innerHTML = e.vendedorid
        col4.appendChild(del)


        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        col4.appendChild(del)
        vendas.appendChild(linha)
});
}

function excluirVendedores(i) {
        fetch(uri + '/excluirvendedor/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}

function excluirVenda(i) {
        fetch(uri + '/excluirvenda/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}
