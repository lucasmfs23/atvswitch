function valor() {
    var cp = Number(document.getElementById('cp').value);
    var qnt = Number(document.getElementById('qnt').value);
    const produtos = [
        { codigo: 1, nome: 'Produto A', preco: 10.0 },
        { codigo: 2, nome: 'Produto B', preco: 20.0 },
        { codigo: 3, nome: 'Produto C', preco: 15.0 },
    ];  
    var valort = 0;
    switch (cp) {
        case 1:
            valort = qnt * produtos[0].preco;
            break;
        case 2:
            valort = qnt * produtos[1].preco;
            break;
        case 3:
            valort = qnt * produtos[2].preco;
            break;
        default:
            valort = 0;
            break;
    }
    document.getElementById('resultado').innerHTML =
        'O resultado final é: R$' + valort +',00.';
}