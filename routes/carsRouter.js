const express = require('express')
const db = require('../data/db-config')
const router = express.Router()


router.get('/', (req, res) => {
    db.find()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.findById(id)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.post('/', (req, res) => {
    db.insert(req.body)
    .then(cars => {
        res.status(201).json({message: 'Car added'})
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(car => {
        res.status(201).json({message: 'Car was deleted'})
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})


router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
    .where(car => {
        res.status(201).json({message: 'car was updated'})
    })
    .catch(error => {
        res.status(500).json({message: 'error'})
    })
})






module.exports = router;