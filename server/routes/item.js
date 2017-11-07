const express = require("express");
const itemRoutes = express.Router();
const Item = require("../models/item");

itemRoutes.get("/", (req, res)=>{
  Item.find(req.query,(err, items)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(items);
  })
})

itemRoutes.get("/:id", (req, res)=>{
  Item.findById(req.params.id, (err, item)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(item)
  })
})

itemRoutes.post("/", (req, res)=>{
  const newItem = new Item(req.body);
  newItem.save((err, savedItem)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(savedItem);
  })
})

itemRoutes.delete("/:id", (req, res)=>{
  Item.findByIdAndRemove(req.params.id, (err, deletedItem)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(deletedItem);
  })
})

itemRoutes.put("/:id", (req, res)=>{
  Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedItem)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(updatedItem);
  })
})

module.exports = itemRoutes;
