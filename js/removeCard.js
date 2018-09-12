//IIFE - Immediately invoked function expression
(function(){

    //localizamos em quem queremos adicionar uma funcionalidade
    const btnsRemoveCard = document.querySelectorAll('.opcoesDoCartao-remove');

    //funcao adiciona classe com a transition
    function addClassCard(){
        this.parentElement.parentElement.classList.add('cartao--some');
    }

    //remove card
    function removeCard(){
        setTimeout(() => {
            this.parentElement.parentElement.remove();
        },400)
    }

    //pega todos os botões e adiciona as funçẽos
    for(let i = 0; i < btnsRemoveCard.length; i++){
        //funcao adiciona a classe
        btnsRemoveCard[i].addEventListener('click', addClassCard);

        //funcao remove o card
        btnsRemoveCard[i].addEventListener('click', removeCard);
    }

        //novo escutador de evento do css(transitionend) para o js 
        /*btn.addEventListener('transitionend', function(){
            this.parentElement.parentElement.remove();
        })*/
})()