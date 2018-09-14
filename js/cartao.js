(function(){
    //pega os cartoes do HTML
    const cards = document.querySelectorAll('.cartao');

    //criando funcao
    function addCardFocus(){
        for(let i = 0; i < cards.length; i++){
            //criando a constante 
            const card = cards[i];

            //adicionando escutador no card em focusin
            card.addEventListener('focusin', function(){
                card.classList.add('cartao--focado');
            })
            
            //adicionando escutado no card em focusout
            card.addEventListener('focusout', function(){
                card.classList.remove('cartao--focado');
            })
        }
    }

    addCardFocus();
})();