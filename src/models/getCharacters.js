const fs = require('fs');
const path = require('path');

function getCharacters() {
    const allCharacters = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/personajes.json')));

    return allCharacters;
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
    getOneCharacter,
    findCharacters,
    createCharacter,
    deleteCharacter
};