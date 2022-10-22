let qntd = (prompt("Com quantas cartas você quer jogar? ;)"))

function verificaCartas(){
    let indice = 4
    while(qntd < indice || qntd > 14 || qntd%2 !== 0){
        alert("Número inválido! Insira um número par entre 4 e 14.")
        prompt("Com quantas cartas você quer jogar?");
        qntd++;            

    }
}
verificaCartas();

const periquitos = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrto', 'unicornparrot']

let card;

function criarCartas(){
    const lista = document.querySelector("div .conteudo-cartas");
    let indice = 0;
    while(qntd > indice){
        let card = [`<div class="carta" onclcick="viraCarta(this)">        
        <div class="lado frente"></div>
        <div class="lado">verso da carta</div>
        </div>`]
        indice++

        lista.innerHTML =  lista.innerHTML + card;

        
    }
}
criarCartas();
