(function(){
    const btnHelp = document.querySelector('#btnAjuda');

    btnHelp.addEventListener('click', function(){
        const textHelp = [
            'Bem vindo ao Ceep', 
            'Clique no botao linhas', 
            'O site esta adaptado para dispositivos moveis'
        ];

        textHelp.forEach(function(text){
            console.log(text);
        })

        /*for(const i in textHelp){
            console.log(textHelp[i]);
        }*/

    });

    btnHelp.classList.remove('no-js');
})();