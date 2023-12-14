const { Person } = require('../models/person');

// Read a person by ID
exports.getPersonById = async (req, res, next) => {
  try {
    const { id } = req.params
    const person = await Person.findById(id);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    return res.status(200).json(person)
  } catch (err) {
    next(err)
  }
}

// Create a new person
exports.createPerson = async (req, res, next) => {
  try {
    const { name } = req.body
    const data = { name }
    const person = await Person.create(data);
    if (!person) {
      return res.status(404).json({ error: "Person not created" });
    }
    return res.status(201).json(person);
  } catch (err) {
    next(err)
  }
}
 
// Update a person by ID
exports.updatePerson = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updateData = {
      name
    }
    const person = await Person.findByIdAndUpdate(id, updateData);
    if (!person) {
      return res.status(404).json({ error: "Update failed" });
    }
    return res.status(200).json({ 
      message: "Person updated successfully",
      person
    })
  } catch (err) {
    next(err)
  }
}

  // Delete a person by ID
exports.deletePerson = async (req, res, next) => {
  try {
    const { id } = req.params
    const person = await Person.findByIdAndRemove(id);
    if (!person) {
      return res.status(404).json({ error: "Delete failed" });
    }
    return res.status(200).json({ 
      message: "Person deleted successfully",
      person
    })
  } catch (err) {
    next(err)
  }
}