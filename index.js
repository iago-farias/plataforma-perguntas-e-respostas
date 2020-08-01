const express = require('express');
const app = express();
const connection = require('./database/database');
const PerguntaController = require('./controllers/PerguntaController');
const RespostaController = require('./controllers/RespostaController');


connection
.authenticate()
.then(()=>{
    console.log("Conexão bem sucedida");
})
.catch((erro)=>{
    console.log(erro);
} );

//Atribuindo o ejs como o view engine da aplicação
app.set('view engine','ejs');
//Atribuindo a pasta de arquivos estáticos 
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 

app.listen(3333, (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("Server is running...");
    }
});

//Routes
app.get("/", PerguntaController.index);

app.get("/perguntar", (request, response) => {
    response.render('perguntar');
});

app.post('/salvarpergunta', PerguntaController.create);

app.get('/pergunta/:id', PerguntaController.getPerguntaById);

app.post('/responder/:idPergunta', RespostaController.create);