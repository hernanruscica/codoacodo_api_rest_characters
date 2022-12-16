const { 
    getCharacters,  
    getCharactersBD,  
    getOneCharacter,
    findCharacters, 
    createCharacter, 
    deleteCharacter 
} = require('../models/getCharacters');

const characters = getCharactersBD();

module.exports = {
    getAllCharacters: (req, res) => res.json(characters),    
    getOneCharacter: (req, res) => {
        const id = req.params.id;
        const character = getOneCharacter(id);
    
        res.json(character);
    },
    findCharacters: (req, res) => {
        const status = req.params.status;        
        console.log(status);
        const characters = findCharacters(status);
        
        res.json(characters);
    },
    createCharacter: (req, res) => {
        const id = characters.length + 1;
        const newCharacter = {
            id: id,
            name: req.body.name,
            status: req.body.status,
            species: req.body.species,
            img: req.body.img,
        }
    
        characters.push(newCharacter);
        createCharacter(characters);
        res.send('Personaje creado con Éxito!!!');
    },
    deleteCharacter: (req, res) => {
        const id = req.params.id;
        const newCharacters = characters.filter(character => character.id != id);
        newCharacters.forEach((character, index) => character.id = index + 1); 
        deleteCharacter(newCharacters);
        res.send(`Personaje #${id} borrado con éxito!!!`);
    }
}