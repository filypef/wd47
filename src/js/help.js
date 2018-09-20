(function(){
    const btnHelp = document.querySelector('#btnAjuda');

    let listHelp; 
    
    //objeto via ajax
    const XHR = new XMLHttpRequest();
    
    XHR.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes');
    XHR.responseType = 'json';
    XHR.send();
    
    XHR.addEventListener('load', function(){        
        listHelp = this.response.instrucoes;
    });
    
    
    btnHelp.addEventListener('click', function(){
        //objeto manual
        /*const textHelp = [{
                text: 'Bem vindo ao Ceep',
                color: 'yellow'
            },
            {
                text: 'Clique no botao linhas',
                color: 'green' 
            },
            {
                text: 'O site esta adaptado para dispositivos moveis',
                color: 'blue'
            }];
        */

        /*for(const i in textHelp){
            createNewCard(textHelp[i].text, textHelp[i].color);
        }*/

        listHelp.forEach(function(objeto){
            window.createNewCard(objeto)
        })

        /*for(const i in textHelp){
            console.log(textHelp[i]);
        }*/

    });

    btnHelp.classList.remove('no-js');
})();