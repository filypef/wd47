//IIFE - Immediately invoked function expression
(function(){

    //localizamos em quem queremos adicionar uma funcionalidade
    const btnRemoveCard = document.querySelectorAll('.opcoesDoCartao-remove');

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
    for(let i = 0; i < btnRemoveCard.length; i++){
        //funcao adiciona a classe
        btnRemoveCard[i].addEventListener('click', addClassCard);

        //funcao remove o card
        btnRemoveCard[i].addEventListener('click', removeCard);
    }

        /*btn.addEventListener('transitionend', function(){
            this.parentElement.parentElement.remove();
        })*/
})()