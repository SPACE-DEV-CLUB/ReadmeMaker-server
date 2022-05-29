module.exports = app => {
    const component = require("../controllers/readme/component.controller")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", component.create);
  
    // Retrieve all Tutorials
    router.get("/", component.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", component.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", component.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", component.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", component.delete);
  
    // Delete all Tutorials
    router.delete("/", component.deleteAll);
  
    app.use("/api/component", router);
  };
   