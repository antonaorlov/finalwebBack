const express = require("express");
const router = express.Router();
const { Employee, Task } = require("../database/models");

const ash = require("express-async-handler");

/** GET ALL employees */
router.get(
  "/",
  ash(async (req, res) => {
    let employees = await Employee.findAll({ include: [Task] });
    res.status(200).json(employees);
  })
);

/** GET employee BY ID*/
router.get(
  "/:id",
  ash(async (req, res) => {
    let employee = await Employee.findByPk(req.params.id, { include: [Task] });
    res.status(200).json(employee);
  })
);

// Delete employee
router.delete(
  "/:id",
  ash(async (req, res) => {
    await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Employee deleted");
  })
);

// Add new instructor
router.post(
  "/",
  ash(async (req, res) => {
    let newEmployee = await Employee.create(req.body);
    res.status(200).json(newEmployee);
  })
);

// Edit employee
router.put(
  "/:id",
  ash(async (req, res) => {
    await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    let employee = await Employee.findByPk(req.params.id, { include: [Task] });
    res.status(201).json(employee);
  })
);

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
