let luzAtual =0;

function mudarLuz(){
    const vermelho = document.getElementById('vermelho');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('verde');

    vermelho.classList.remove('active');
    amarelo.classList.remove('active');
    verde.classList.remove('active');
    if(luzAtual === 0){
        vermelho.classList.add('active');
    }
    if(luzAtual === 1){
        amarelo.classList.add('active');
    }
    if(luzAtual === 2){
        verde.classList.add('active');
    }

    luzAtual = (luzAtual +1) % 3;
}
setInterval(mudarLuz, 2000);