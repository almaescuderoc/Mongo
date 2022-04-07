const http= require('http');
const mongoose = require('mongoose');
const url = require('url');

const MONGO_URI="mongodb+srv://root:root@cluster0.ms3dz.mongodb.net/MyPelis?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, function(err){
    if(err){
        console.log('Error al conectarse a la BD');
    }
    else{
        console.log('Conectado a la BD');
    }
});


const PelisSchema = new mongoose.Schema({
    name: { type: String},
    genero: { type: String}
});

const PelisModel = mongoose.model('pelis', PelisSchema);

const server = http.createServer(function (request, response){

    response.write('Hello World');
    response.end();
});

server.listen(process.env.PORT || 3000, function(){
    console.log('Servidor escuchando');
});

