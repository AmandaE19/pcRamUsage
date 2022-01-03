const { stat } = require("fs");
const os = require("os");

setInterval(() => {
    const {arch, platform, totalmem, freemem} = os;
    const tRam = totalmem()/1024/1024; //DIVIDE PARA QUE O VALOR SEJA DADO EM MB
    const fRam = freemem()/1024/1024; //DIVIDE PARA QUE O VALOR SEJA DADO EM MB
    const usage= (fRam / tRam) * 100; //VALOR DA PORCENTAGEM DE USO

    //OBJETO QUE CONTÉM AS INFORMAÇÕES ÚTEIS
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }

    console.clear(); //LIMPA O CONSOLE
    console.table(stats); //IMPRIME NO CONSOLE EM FORMA DE TABELA
    exports.stats = stats; //EXPORTA UM STATS QUE RECEBE NOSSO OBJETO STATS
    
}, 1000);