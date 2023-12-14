const router = require("express").Router()
const { getPersonById, createPerson, updatePerson, deletePerson } = require("../controller/personController")

router.get("/:id", getPersonById)
router.post("/", createPerson)
router.patch("/:id", updatePerson)
router.delete("/:id", deletePerson)

module.exports = router