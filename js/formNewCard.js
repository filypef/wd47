//(function(){
    const form = document.querySelector('.formNovoCartao');
    const formContent = form.querySelector('textarea');
    let article = document.querySelectorAll('.mural > article').length;
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        if(formContent.value.trim()){
            createNewCard(formContent.value.trim());
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
//})();