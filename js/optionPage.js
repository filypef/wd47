const btnMudaLayout = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');


function mudaLayout(){
   mural.classList.toggle('mural--linha');
    /* if(mural.classList.contains('mural--linha')){
        mural.classList.remove('mural--linha')
    }else{
        mural.classList.add('mural--linha');
    }*/
}

function mudaTexto(){
    if(this.textContent == 'Blocos'){
        this.textContent = 'Linhas';
    }else{
        this.textContent = 'Blocos';
    }
}

btnMudaLayout.addEventListener('click', mudaTexto);
btnMudaLayout.addEventListener('click', mudaLayout);

/*btnMudaLayout.addEventListener('click', function(){

    this.classList.toggle('bloco');

    const containerMural = document.querySelector('.mural');

    if(this.classList.contains('bloco')){
        this.textContent = 'Bloco';
        containerMural.classList.add('mural__bloco');
    }else{
        this.textContent = 'Linha';
        containerMural.classList.remove('mural__bloco')
    }
})*/