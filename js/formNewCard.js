(function(){
    const form = document.querySelector('.formNovoCartao');
    const formContent = form.querySelector('textarea');
    
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        if(formContent.value.trim()){
            const card  = createCard(formContent.value.trim());
            addCardMural(card);
        }else{
            const textMsg = 'Digite um texto para criar o cartão'
            const span = msgError(textMsg);
            addMsgForm(span);
            removeMsg();
        }
    })
    
    function msgError(msg){
        const $span = document.createElement('span');
        $span.classList.add('formNovoCartao-msg');
        $span.textContent = msg;
        
        return $span;
    }

    function addMsgForm(span){
        form.appendChild(span);
    }

    function removeMsg(){
        form.addEventListener('animationend', function(e){
            e.target.remove();
        })
    }

    function createCard(text){
        const article = document.querySelectorAll('.mural > article');
        
        const card = document.createElement('article');
        card.id = 'cartao_' + (article.length + 1);
        card.classList.add('cartao');
        card.tabIndex = 0;
        card.textContent = text;
        
        return card;
    }

    function addCardMural(card){
        const mural = document.querySelector('.mural');        
        mural.appendChild(card);
        formContent.value = '';
        formContent.focus();
    }

    

    /*form.appendChild($span);

        $span.addEventListener('animationend', function(){
            this.remove();
        })
    
    /*const btnSalve = form.querySelector('.formNovoCartao-salvar');

    btnSalve.addEventListener('click', createCard);

    function createCard(e){
        e.preventDefault();
        console.log(this.previousElementSibling.value);
    }

    function getInputText(){
        this.previousElementSibling.value;
    }*/

    form.classList.remove('no-js');
})();