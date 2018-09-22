const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


// @route   GET api/items / :id
// @desc    Get INDIVIDUAL POST 
// @access  Public

router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item));
});




// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    lastName: req.body.lastName,

    // address: req.body.lastName,
    // street: req.body.lastName,
    // city: req.body.lastName,
    // state: req.body.lastName,
    // zip: req.body.lastName,

  });

  newItem.save().then(item => res.json(item));
});


// @route   DELETE api/items
// @desc    Delete a item
// @access  Public
router.delete('/:id', (req, res) => {
  
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

 
// @route   PUT api/items
// @desc    Delete a item
// @access  Public


 
  // use our bear model to find the bear we want
 
   router.put('/:id', (req, res, next) => {
    Item.findByIdAndUpdate(req.params.id, req.body,  (err, post) => {
      if (err) return next(err);
      res.json(post);
    });
  });

    // router.put('/:id', function(req, res, next) {
    //   Item.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    //     if (err) return next(err);
    //     res.json(post);
    //   });
    // });



module.exports =  router;



