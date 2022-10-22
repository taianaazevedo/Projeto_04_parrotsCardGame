//pergunta a quantidade de cartas:

let qntd = parseInt(prompt("Com quantas cartas você quer jogar? ;)"))

while(qntd < 4 || qntd > 14 || (qntd % 2) !== 0){
    alert("Número inválido! Insira um número par entre 4 e 14.")
       parseInt(prompt("Com quantas cartas você quer jogar?"));        

}

//cria a array com os gifs:

const periquitos = [
    'bobrossparrot.gif', 
    'explodyparrot.gif', 
    'fiestaparrot.gif', 
    'metalparrot.gif', 
    'revertitparrot.gif', 
    'tripletsparrot.gif', 
    'unicornparrot.gif'
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

let card;

//criar cartas 

function criarCartas(){

    const listaCartas = document.querySelector('div .conteudo-cartas');
    
    for(i = 0; i < gifs.length; i++){    
           
        let cartinha = `<div class="carta">        
        <div class="lado frente"></div>
        <div class="lado verso"><img src="./imagens/${gifs[i]}"</div>
        </div>`;
        
        listaCartas.innerHTML += cartinha;    

    }
}
criarCartas();
