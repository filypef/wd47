(function(){
    //pega os cartoes do HTML
    const cards = document.querySelectorAll('.cartao');

    //criando funcao    
    for(let i = 0; i < cards.length; i++){
        //criando a constante 
        const card = cards[i];

        //adiciona classe cartao focado
        function cardFocusIn(){
            card.classList.add('cartao--focado');
        }

        //remove classe cartao focado
        function cardFocusOut(){
            card.classList.remove('cartao--focado');
        }

        //adiciona escutador focusin no cartao
        card.addEventListener('focusin', cardFocusIn);

        //adiciona escutador focusout no cartao
        card.addEventListener('focusout', cardFocusOut);

        //adiciona bubbling no cartao para opcoes de colors
        card.addEventListener('change', function(e){
            if(e.target.classList.contains('opcoesDoCartao-radioTipo')){
                const color = e.target.value;
                card.style.backgroundColor = color;
            }
        })

        card.addEventListener('keydown', function(e){
            if(e.code == 'Enter'){
                e.target.click();
            }
        })

        //Adiciona classe some na div para remover
        function addClassCard(btnRemove){
            btnRemove.parentElement.parentElement.classList.add('cartao--some');
        }

        //Remove o cartão
        function removeCard(btnRemove){
            setTimeout(() => {
                btnRemove.parentElement.parentElement.remove();
            },400)
        }

        //bubbling no cartao para botao remove
        card.addEventListener('click', function(e){
            if(e.target.classList.contains('opcoesDoCartao-remove')){
                addClassCard(e.target);
                removeCard(e.target);
            }
        })
    }
})();