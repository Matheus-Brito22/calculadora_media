const form = document.getElementById('form');
const imgReprovado = '<>'
const imgAprovado = '454'
const atividades =[];
const notas = [];
const spanAprovado = '<samp class="resultado aprovado">Aprovado</samp>';
const spanReprovado ='<samp class="resultado reprovado">Reprovado</samp>';
const notaMinima = Number(prompt("Digite a nota minima"));


let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaNotas();
    calculaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('inp1');
    const inputNotaAtividade = document.getElementById('inp2');

   if(atividades.includes(inputNomeAtividade.value)){

    alert (`A atividade: ${inputNomeAtividade} já foi inserida!`)
} else
{
    atividades.push(inputNomeAtividade.value);
    notas.push(Number(inputNotaAtividade.value));


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
    linha += `</td>`;
    linhas += linha;
    }
   

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){

    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas
}

function atualizaNotas(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('mediaFinalValor').innerHTML = mediaFinal
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++ ){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length
}