const express = require("express");
const {
  getPerson,
  createPerson,
  createPostmanPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController");

const router = express.Router();

// Controllers basically move the callback functions into a separate ‘controllers’ folder, and then import them back into the main file to keep the code neat and clean.
// 1. Fetch the data
router.get("/", getPerson);

// 2(a). Create a data
router.post("/", createPerson);

// 2(b). Using Postman Tool, we can insert data
router.post("/postman", createPostmanPerson);

// 3. PUT - update the data
router.put("/:id", updatePerson);

// 4. DELETE - delete a data
router.delete("/:id", deletePerson);

// We have another short way to write routes
// router.route("/").get(getPerson).post(createPerson);
// router.route("/postman").post(createPostmanPerson);
// router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
