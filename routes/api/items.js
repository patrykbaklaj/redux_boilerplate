const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Items');

router.get('/', (req, res) => {
    Item.find((err, foundedItems) => {
        if (!err) {
            res.status(200).send(foundedItems);
        }
    });
});

router.post('/', (req, res) => {
    const { name } = req.body;
    const newItem = new Item({ name });
    newItem.save((err, savedItem) => {
        if(!err) {
            res.status(200).send(savedItem);
        }
    });
});

module.exports = router;
