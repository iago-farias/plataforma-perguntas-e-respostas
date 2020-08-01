const Resposta = require('../models/Resposta');

module.exports = {

    create(request, response){
        const { idPergunta } = request.params;
        const { corpo } = request.body;
    
        Resposta.create({
            corpo,
            perguntaId: idPergunta
        })
        .then(() => {
            response.redirect('/pergunta/' + idPergunta);
        })
    }
}