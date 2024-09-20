'use strict'; // Ativa o modo restrito
// Código para consumo de API da ViaCEP
//https://viacep

// Limpar consulta do form já realizada
const limparformulario = () =>{
    document.getElementById('rua').value='';
    document.getElementById('bairro').value='';
    document.getElementById('cidade').value='';
    document.getElementById('estado').value='';
}

// Verifica se o CEP é válido
const eNumero =(numero) => /^[0-9]+$/.test(numero);

// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;// Coloca o valor de logradouro da API dentro do campo logradouro do formulário
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}
