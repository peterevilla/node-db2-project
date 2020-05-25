const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);



module.exports = {

    find,
    insert,
    findById,
    remove,
    update,
};


function find() {
    return db('cars')
}

function insert(car) {

    return db('cars').insert(car);
}

function findById(id) {
    return db('cars').where({ id: Number(id) });
}

function remove(id) {
 
     return db('cars').where({id: Number(id)}).del();
}

function update(id, newCar) {

    return db('cars').where('id', Number(id)).update(newCar)
}