const express = require('express');
const router = express.Router();
// const IndividualItem = require('../../models/Item');
const Item = require('../../models/Item');


// @route   GET api/items / :id
// @desc    Get Individual Post item
// @access  Public
// router.get('/:id', (req, res) => {
//   IndividualItem.findById(req.params.id)
//     .then(item => res.json(item));
// });

router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item));
});



// @route   GET api/items/test
// @desc    Testing this route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Testing Individual Shipment "}))

  module.exports =  router;
