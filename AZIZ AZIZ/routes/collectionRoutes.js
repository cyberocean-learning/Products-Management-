const express = require('express');
const Collection = require('../models/Collection');
const router = express.Router();


router.post('/', async (req, res) => {
    const collection = new Collection(req.body);
    try {
        await collection.save();
        res.status(201).send(collection);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/get', async (req, res) => {
    try {
        const collections = await Collection.find();
        res.send(collections);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const collection = await Collection.findById(req.params.id);
        if (!collection) {
            return res.status(404).send();
        }
        res.send(collection);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const collection = await Collection.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!collection) {
            return res.status(404).send();
        }
        res.send(collection);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const collection = await Collection.findByIdAndDelete(req.params.id);
        if (!collection) {
            return res.status(404).send();
        }
        res.send(collection);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;