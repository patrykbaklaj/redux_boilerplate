const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Items');


// GET api/items
// Return all items

router.get('/', (req, res) => {
    Item.find({}, (err, foundedItems) => {
        if (!err) {
            res.status(200).send(foundedItems);
        }
    });
});

// POST api/items
// Add new item

router.post('/', (req, res) => {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    newItem.save((err, savedItem) => {
        if (!err) {
            res.status(200).send(savedItem);
        } else {
            res.status(400).send(err);
        }
    });
});


// POST api/itmes/:id
// DELETE item

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Item.findOneAndDelete({_id: id}, (err, foundItem) => {
        if(!err) {
            console.log(foundItem);
            res.status(200).send(foundItem);
        }
    })
});

module.exports = router;
