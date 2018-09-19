(function(){
    const btnHelp = document.querySelector('#btnAjuda');

    btnHelp.addEventListener('click', function(){
        const textHelp = [{
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

        /*for(const i in textHelp){
            createNewCard(textHelp[i].text, textHelp[i].color);
        }*/

        textHelp.forEach(function(text){
            createNewCard(text);
        })

        /*for(const i in textHelp){
            console.log(textHelp[i]);
        }*/

    });

    btnHelp.classList.remove('no-js');
})();