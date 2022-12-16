const fs = require('fs');
const path = require('path');
const charactersConection = require('./conection');

function getCharacters() {
    const allCharacters = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/personajes.json')));        
    return allCharacters;
}

function getCharactersBD() {
    //console.log(charactersConection.query('SELECT * FROM characters;')); porque carajos no funciona...?
    charactersConection.query('SELECT * FROM characters AS solution', function (error, results, fields) {
        if (error) throw error;
        else{
            console.log("conexion exitosa");
        }
       //allCharactersBD = results;
       //const resultados = results.map(result => result.RowDataPacket);
       //results.forEach((result) => {
        console.log(results); 
      // });
       
       return results;
    });    
}

function getOneCharacter(id) {
    const allCharacters = getCharacters();

    return allCharacters.find( character => character.id == id);
}

function findCharacters(status) {
    /* aca quiero hacer mi funcion para encontrar los personajes con un determinado status */
    const allCharacters = getCharacters();
    return allCharacters.filter(character => character.status == status);
}

function createCharacter(characters) {
    fs.writeFileSync(path.join(__dirname,'../data/personajes.json'), JSON.stringify(characters, null, ' '));
}

function deleteCharacter(characters) {
    fs.writeFileSync(path.join(__dirname,'../data/personajes.json'), JSON.stringify(characters, null, ' '));
}

module.exports = {
    getCharacters,  
    getCharactersBD,  
    getOneCharacter,
    findCharacters,
    createCharacter,
    deleteCharacter
};