const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) // descending sort
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Deletes An Item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   PUT api/items/:id
// @desc    Updates An Item based on the ID passed to the route
// @access  Public
// TODO FIX this in order to work
// router.put("/:id", (req, res) => {
//   Item.findById(req.params.id, (err, item) => {
//     if (!item) res.status(404).send({ message: "Item does not exist" });

//     item.name = req.body.name;

//     let updatedItem = new Item(item);

//     updatedItem.save(err => {
//       if (err) return res.send(500, err.message);
//       console.log("Successfully updated: " + req.body.id);
//       res.status(200).json(item);
//     });
//   });
// });

module.exports = router;
