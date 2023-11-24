const mongoose = require('mongoose');

async function main(){
    
    try {
        await mongoose.connect(process.env.MONGO_URL);
        
        console.log('MongoDB conectado');
    } catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;