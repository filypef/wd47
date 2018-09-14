(function(){
    //pega os cartoes do HTML
    const cards = document.querySelectorAll('.cartao');

    //criando funcao    
    for(let i = 0; i < cards.length; i++){
        //criando a constante 
        const card = cards[i];

        function cardFocusIn(){
            card.classList.add('cartao--focado');
        }

        function cardFocusOut(){
            card.classList.remove('cartao--focado');
        }

        card.addEventListener('focusin', cardFocusIn);
        card.addEventListener('focusout', cardFocusOut);

        card.addEventListener('change', function(e){
            if(e.target.classList.contains('opcoesDoCartao-radioTipo')){
                const color = e.target.value;
                card.style.backgroundColor = color;
            }
        })
    }
})();