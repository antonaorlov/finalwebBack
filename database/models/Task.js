const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  description: {
    type: Sequelize.STRING,
    allowNull: true, // Allow this field to be null
  },
  priority: {
    type: Sequelize.STRING
  },
  isComplete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
   }
});

module.exports = Task;
