const formularioContato = document.getElementById('incluirContato');
const tabelaContatos = document.getElementById('listaContatos');
const telefone = [];
const nome = [];
const telefonesInseridos = new Set();

const inputNomeContato = document.getElementById('nomeContato');
const inputTelefoneContato = document.getElementById('telefoneContato');

let linhas = '';

formularioContato.addEventListener('submit', function (e) {
    e.preventDefault();

    novaLinha();
    atualizaTabela ();
    limpaForm();
});

    function novaLinha (){

        if (telefonesInseridos.has(inputTelefoneContato.value)) {
            alert(`O telefone "${inputTelefoneContato.value}" já foi inserido`); // Informar se telefone já foi incluído
            return; // Parar a execução da função se o telefone já foi inserido
        } 
        telefonesInseridos.add(inputTelefoneContato.value);

        nome.push(inputNomeContato.value);
        telefone.push(parseFloat(inputTelefoneContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }  // Adiciona nova linha com novo contato

    function atualizaTabela (){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    };

    function limpaForm(){
        inputNomeContato.value = '';
        inputTelefoneContato.value = '';
    } // Limpar campos do formulário após adicionar o contato
