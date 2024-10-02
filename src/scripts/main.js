AOS.init(); //aqui é a continuação da etapa para deixar o site com animação 

//aqui é para funcionar o contador do site, e tem que puchar o ID do HTML também
const dataDoEvento = new Date("oct 31, 2024 19:30:00"); //o DEC é abreviação de december que é desembro em inlgês, aqui determina o dia em que acontecerá o evento
//Recuparação do timeStampDoEvento
const timeStampDoEvento = dataDoEvento.getTime();

//aqui é o contador de Horas
const contaAsHoras = setInterval(function() {
    const agora = new Date(); //o new date pega a data atual
    const timeStampAtual = agora.getTime();

    //aqui vou pegar a distãncia do timeStampAtual e o timeStampDoEvento
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;


    const  diasEmMs = 1000 * 60 * 60 * 24;
    const  horasEmMS = 1000 * 60 * 60;
    const  minutisEmMs = 1000 * 60;

//aqui é para chegar na contidade de dias até o evento
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs); //o Math floor e para aredondar para baixo e não ter números quebrados. math é de matemática e floor e de piso para jogar para baixo
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMS); //a % retorna o resto da divisão
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMS) / minutisEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutisEmMs) / 1000);

    
    //aqui é para colocar toda esssa conta para funcionar visivelmente no site

    //o innerHTML é para poder puchar o ID do html. essas `` são chamadas de crase
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    //aqui é para quando o temppo no site acabar e ele parar
    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras); //limpa o evento
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }

}, 1000);