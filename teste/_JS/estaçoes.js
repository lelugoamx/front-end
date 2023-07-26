function obterestacoes(){ 
  

    let numero = parseInt (document.getElementById("estacoes").value);
    
        
     switch(numero){
    
        case 1:
            document.write("Do latim: autumno. Também conhecido como o tempo da colheita, pois é nesta época que ocorrem as grandes colheitas. Os dias ficam mais curtos e mais frescos. As folhas e frutas, já estão bem maduras e começam a cair no chão. Os jardins e parques ficam, coberto de folhas de todos os tamanhos e cores.Isto por que os países lá do hemisfério norte precisam se preparar para o inverno que está chegando. É necessário armazenar bastante comida para nada possa faltar!");
            document. getElementById(img). src =""
        case 2: 
        document.write("Do latim: hibernu, tempus hibernus, tempo hibernal. Associado ao ciclo biológico de alguns animais ao entrar em hibernação e se recolherem durante o período de frio intenso. Estação que sucede o Outono e antecede a Primavera.O inverno é a estação mais fria do ano. Os dias são curtos e por isso escurece mais cedo. No sul do Brasil é comum ver a neve cair, cobrindo o chão e as plantas. Já nas outras regiões como São Paulo e Rio de Janeiro, é a chuva quem dá o ar da sua graça.Como a temperatura cai nessa fase, as pessoas tendem a passar mais tempo dentro de casa, principalmente debaixo das cobertas!");
        break;
    
        case 3:
            document.write("Do latim: primo vere, no começo do verão.  Ah, essa é a estação mais florida do ano! Representa a época primeira, a estação que antecede o Verão. Com o fim do inverno, os voltam a ser mais longos e quentes. Este é o período em que os animais se reproduzem e constroem seus ninhos. Os insetos como as borboletas e abelhas, voam de flor em flor em busca néctar que as flores possuem. A temperatura não é tão baixa e nem tão alta fazendo da primavera uma época muito agradável.");
            break;
            case 4:
            document.write("Do latim vulgar: veranum, veranuns tempus, tempo primaveril ou primaveral.Chegou o Verão, a estação mais quente do ano. Muito calor e dias bem longos. As temperaturas estão lá em cima. Relativo a primavera. Estação que sucede a Primavera e antecede o Outono.            As árvores estão verdes e carregadas de frutas. Neste período a Terra recebe mais chuva por causa da vaporização das águas. O céu fica, ás vezes, fica nublado com pesadas nuvens que são o acúmulo de águas dos rios e dos mares transportadas para a atmosfera em forma de vapor. O verão é uma estação muito gostosa, com a chegada das férias e um clima de alegria no ar.");
           break;
        
            default:
                alert("opção invalida");
                
                
                
     }
    
    
    
    }