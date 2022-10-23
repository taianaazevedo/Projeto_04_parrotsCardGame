//pergunta a quantidade de cartas:
 
let qntd = prompt('Com quantas cartas você quer jogar?')

while(qntd < 4 || qntd > 14 || (qntd % 2) !== 0){
    qntd = prompt('Com quantas cartas você quer jogar?');        
}


//cria a array com os gifs:

const periquitos = [
    'bobrossparrot', 
    'explodyparrot', 
    'fiestaparrot', 
    'metalparrot', 
    'revertitparrot', 
    'tripletsparrot', 
    'unicornparrot'
]

const gifs = [];

function criaGifs(){
// a quantidade deve ser dividida por 2, para que os gifs tenham seus pares
for(i = 0; i < (qntd / 2); i++){
        const versoGif = periquitos[i];
        gifs.push(versoGif) + gifs.push(versoGif);

        
}

}
criaGifs();

//embaralhar as cartas

gifs.sort(comparador)

function comparador() { 
	return Math.random() - 0.5; 
}
//carta completa: com a frente e o verso.


let card;

//criar cartas - aula de quarta-feira

function criarCartas(){

    const listaCartas = document.querySelector('div .conteudo-cartas');
    
    for(i = 0; i < gifs.length; i++){    
           
        let card = `<div class="carta" data-periquito="${gifs[i]}"onclick="flipCarta(this)">        
        <div class="lado frente"></div>
        <div class="lado verso"><img src="./imagens/${gifs[i]}.gif"</div>
        </div>`;
        
        listaCartas.innerHTML += card;    

    }
}
criarCartas();

let primeiraCarta = '';
let segundaCarta = '';

function checaCartas(){
    const primeiroPeriquito = primeiraCarta.getAttribute('data-periquito');
    const SegundoPeriquito = segundaCarta.getAttribute('data-periquito');

    if(primeiroPeriquito === SegundoPeriquito){
        
        primeiraCarta = '';
        segundaCarta = '';
            


    } else {

        setTimeout(() => {
            primeiraCarta.classList.remove('virada');
            segundaCarta.classList.remove('virada');

            primeiraCarta = '';
            segundaCarta = '';
            
        }, 1000);
        
    }
}
checaCartas();

function flipCarta(cartaSelecionada){
    
  if (cartaSelecionada.classList.contains('virada')){
    return;
  }
  if( primeiraCarta === ''){
    cartaSelecionada.classList.add('virada');
    primeiraCarta = cartaSelecionada;
  } else if (segundaCarta === ''){
    cartaSelecionada.classList.add('virada');
    segundaCarta = cartaSelecionada;

  }
  checaCartas();
}
flipCarta();