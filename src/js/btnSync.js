(function(){
    'use strict'
    const btnSync = document.querySelector('#btnSync');
    
    btnSync.addEventListener('click', () => {
        let listCard = [];
        
        const cards = document.querySelectorAll('.cartao');
        
        for(let i = 0; i < cards.length; i++){
            const color = cards[i].querySelector('input:checked').value;
            const text = cards[i].querySelector('.cartao-conteudo').textContent;

            let card = {
                conteudo: text,
                cor : color
            }

            listCard.push(card);

            //objeto e push refatorado
            /*listCard.push({
                conteudo,
                cor
            })*/
        }
        
        const XHR = new XMLHttpRequest();
        XHR.open('POST','https://ceep.herokuapp.com/cartoes/salvar');
        XHR.setRequestHeader('Content-Type','application/json');

        const accessUser = {
            usuario: 'filype',
            cartoes: listCard
        }

        XHR.send(JSON.stringify(accessUser));

        XHR.addEventListener('load', function (){
            const response = JSON.parse(this.response);
            console.log(`${response.quantidade} de cartoes do ${response.usuario}`);        
        })

        //pegar todos os cartoes (vai retornar a lista de todos os cartoes)

        //percorrer todos os cartoes (for)

        //dentro do for, buscar o conteudo(<p>), e a cor (input:checked);

        //montar um novo objeto {}

        //enviar objeto pro array (usando push)
    })

    btnSync.classList.remove('no-js');
})();