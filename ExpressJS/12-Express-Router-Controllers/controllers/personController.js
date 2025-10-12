const { persons } = require("../../Common-Data/data");

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: persons });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, personName: name });
};

const createPostmanPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, data: [...persons, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  console.log(`id: ${id} & name: ${name}`);

  const people = persons.find((person) => {
    return person.id === Number(id);
  });
  console.dir(people, { depth: null });

  if (!people) {
    return res
      .status(404)
      .json({ success: false, msg: `no people found with id: ${id}` });
  }

  const newPeople = persons.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const people = persons.find((person) => person.id === Number(req.params.id));

  if (!people) {
    return res.status(404).json({
      success: false,
      msg: `no people found with id: ${req.params.id}`,
    });
  }
  const newPeople = persons.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPerson,
  createPerson,
  createPostmanPerson,
  updatePerson,
  deletePerson,
};
