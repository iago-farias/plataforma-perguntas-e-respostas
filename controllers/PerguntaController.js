const Pergunta = require('../models/Pergunta');
const Resposta = require('../models/Resposta');

module.exports = {
    index(request, response){
        Pergunta
        .findAll({raw:true, order:[['createdAt', 'DESC']]})
        .then((result) => {
            const perguntas = result;

            response.render('index',{
                perguntas:perguntas
            });
        });

    },

    create(request, response){
        const { titulo, descricao } = request.body;

        Pergunta.create({
            titulo,
            descricao
        }).then(() => {
            response.redirect('/');
        });
    },

    getPerguntaById(request, response){
        const { id } = request.params;

        Pergunta.findOne({
            where:{
                id
            }
        })
        .then((pergunta) => {
            if(pergunta != undefined){
                // Busca todas as Respostas da dadas a pergunta
                Resposta.findAll({
                    where:{perguntaId: pergunta.id},
                    order:[['createdAt', 'DESC']]
                })
                .then((respostas) => {
                    response.render("pergunta",{
                        pergunta: pergunta,
                        respostas: respostas
                    });
                })
            } else{
                response.redirect("/");
            }
        })
    }
}