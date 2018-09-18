(function(){
    const btnHelp = document.querySelector('#btnAjuda');

    btnHelp.addEventListener('click', function(){
        console.log('Entrou');
    });

    btnHelp.classList.remove('no-js');
})();