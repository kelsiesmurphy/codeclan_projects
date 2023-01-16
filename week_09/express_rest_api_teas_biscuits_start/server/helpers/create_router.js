const express = require('express');

const createRouter = function(data){

    const router = express.Router()

    // Index = GET - '/api/data'
    router.get('/', (req, res) => {
    res.json(data)
    })

    // Show = GET - '/api/data/:id
    router.get('/:id', (req, res) => {
    res.json(data[req.params.id])
    })

    // Create = POST - 'api/data
    router.post('/', (req, res) => {
    data.push(req.body);
    res.json(data)
    })

    // Destroy = DELETE - 'api/data/:id'
    router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.json(data)
    })

    // Update = PUT - 'api/data/:id'
    router.put('/:id', (req, res) => {
    data[req.params.id] = req.body
    res.json(data)
    })

    return router;
}

module.exports = createRouter