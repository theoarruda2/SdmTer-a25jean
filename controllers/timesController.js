const timesRepo = 
require('../repositorios/timesRepo');

const time_jogadorRepo = require('../repositorios/time_JogadorRepo');

const jogadoresRepo = require('../repositorios/jogadoresRepo');

const services = require('../services/index');


const timesController = {
    getTimeById(id) {
        return timesRepo.getTimeById(id);
    },
    getAllTimes(apiKey) {
        if (this.ApiKeyTest(apiKey)) {
        let times = timesRepo.getAllTimes();
        //let resposta = new Response(200,times,'OK');
        return services.createOkResponse(times);
        } else {
   
        return services. createUnAuthResponse(times);
        }
    },

    getJogadoresTime(apiKey, idTime) {
        if (this.ApiKeyTest(apiKey)) {
            let jogs = time_jogadorRepo.getJogadoresTime(idTime);
            let jogadores = [];    
            jogs.forEach(id => {
                jogadores.push(
                    jogadoresRepo.getJogadorById(id)
                );
            });
            let resposta = services.createOkResponse()
           // let resposta = new Response(200,jogadores,'OK');
            return resposta;
        } else {
            return services.createUnAuthResponse();
            //return new Response(403,undefined,'Não Autorizado')
        }
    },



    addTime(time) {
        timesRepo.addTime(time);
    }
}

module.exports = timesController;

