function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido')
    }
} 

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0;i<listaDeTeclas.length;i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio =`#som_${instrumento}`;
    console.log(idAudio)
    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    tecla.onkeydown = function(event){
        console.log(event.code== "Enter" || "Space");
        if(event.code === "Enter" || event.code === "Space" ){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
    }
}

