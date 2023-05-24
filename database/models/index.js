// register models, set up associations between tables, and generate barrel file for the models;
//fiex emplyee,
const Employee = require("./Employee");
const Task = require("./Task");

Task.belongsTo(Employee);
Employee.hasMany(Task);

module.exports = {
  Employee,
  Task,
};
