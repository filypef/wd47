(function(){
    'use strict'
    let article = document.querySelectorAll('.mural > article').length;

    window.createNewCard = function (objetoCard){
    
        let card;
    
        if(typeof(objetoCard) === 'object'){
            card  = createCard(objetoCard.text, objetoCard.color);
        }else{
            card  = createCard(objetoCard, 'yellow');
        }
        
        addCardMural(card);
    
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
    
        function createCard(text, color){
            const card = document.createElement('article');
            article = article + 1;
            const positionCard = article;
            card.id = 'cartao_' + positionCard;
            card.classList.add('cartao');
            card.tabIndex = 0;
            card.style.backgroundColor = color;
            createOptionColor(card, positionCard, text);
            
            return card;
        }
    
        function addCardMural(card){
            const mural = document.querySelector('.mural');        
            mural.appendChild(card);
            formContent.value = '';
        }
    
        function createOptionColor(card, position, text){
            const optionsCard = document.createElement('div');
            optionsCard.classList.add('opcoesDoCartao');
    
            const labelsColor = `
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                    <svg><use xlink:href="#iconeRemover"></use></svg>
                </button>
    
                <input type="radio" name="corDoCartao${position}" value="#EBEF40" id="corPadrao-cartao${position}" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrao-cartao${position}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
                    </label>
    
                <input type="radio" name="corDoCartao${position}" value="#F05450" id="corImportante-cartao${position}" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao${position}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
                </label>
    
                <input type="radio" name="corDoCartao${position}" value="#92C4EC" id="corTarefa-cartao${position}" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao${position}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
                </label>
    
                <input type="radio" name="corDoCartao${position}" value="#76EF40" id="corInspiração-cartao${position}" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao${position}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
                </label>`
    
            card.appendChild(optionsCard);
            optionsCard.innerHTML = labelsColor;
    
            let paragraph = document.createElement('p');
            paragraph.classList.add('cartao-conteudo');
            paragraph.contentEditable = true;
            paragraph.tabIndex = 0;
            paragraph.textContent = text;
            card.appendChild(paragraph);
    
            return optionsCard;
        }
    }
})(window);
