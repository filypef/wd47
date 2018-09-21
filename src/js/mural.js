(()=>{
    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: {usuario: 'filype'},
        dataType: 'jsonp',
        success: function(resposta){
            console.log(resposta.cartoes);
            resposta.cartoes.forEach(cartao => {
                window.createNewCard(cartao)
            })
        }
    })

    //CORS AJAX - Controle de acesso HTTP
    //UTILIZA A TECNICA JSONP
})();