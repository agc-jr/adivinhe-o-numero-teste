// Sorteia o número secreto entre 1 e 100
let secreto = Math.floor(Math.random() * 100) + 1;
let chutes = [];                                     // NOVO: lista de chutes da partida

// Pega os elementos da página pelo id
const formulario = document.querySelector('#formulario');
const campo = document.querySelector('#palpite');
const mensagem = document.querySelector('#mensagem');
const listaChutes = document.querySelector('#chutes'); // NOVO
const botaoReiniciar = document.querySelector('#reiniciar');

// Cada vez que o jogador clica em "Chutar"
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // não deixa a página recarregar

    const palpite = Number(campo.value);
    chutes.push(palpite);                                          // NOVO: guarda o chute
    listaChutes.textContent = `Seus chutes: ${chutes.join(', ')}`; // NOVO: mostra a lista

    if (palpite < secreto) {
        mensagem.textContent = `${palpite} é baixo. Tente um número MAIOR!`;
    } else if (palpite > secreto) {
        mensagem.textContent = `${palpite} é alto. Tente um número MENOR!`;
    } else {
        mensagem.textContent = `Acertou em ${chutes.length} tentativa(s)! O número era ${secreto}.`; // NOVO
        formulario.hidden = true;
        botaoReiniciar.hidden = false;
    }

    campo.value = '';
    campo.focus();
});

// Botão "Jogar de novo": sorteia outro número e mostra o formulário
botaoReiniciar.addEventListener('click', function () {
    secreto = Math.floor(Math.random() * 100) + 1;
    chutes = [];                  // NOVO: zera a lista
    listaChutes.textContent = ''; // NOVO
    mensagem.textContent = '';
    formulario.hidden = false;
    botaoReiniciar.hidden = true;
    campo.focus();
});
