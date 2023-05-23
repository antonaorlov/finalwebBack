const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
  });

  const dummyEmployee2 = await Employee.create({
    firstname: "Walter",
    lastname: "White",
    department: "Mathematics",
  });

  const dummyEmployee3= await Employee.create({
    firstname: "Anton",
    lastname: "White",
    department: "Engineering",
  });

  const dummyEmployee4 = await Employee.create({
    firstname: "Bob",
    lastname: "White",
    department: "Physics",
  });

  const dummyTask = await Task.create({
    description: "Paperwork",
    priority: "Low",
    
  });


  const dummyTask2 = await Task.create({
    description: "Answer emails",
    priority: "Medium",
   
  });

  
  const dummyTask3 = await Task.create({
    description: "Make new List",
    priority: "high",
  
  });

  
  const dummyTask4 = await Task.create({
    description: "Clean Laundry",
    priority: "Medium",
  
  });

  await dummyTask.setEmployee(dummyEmployee);
  await dummyTask2.setEmployee(dummyEmployee2);
  await dummyTask3.setEmployee(dummyEmployee3);
  await dummyTask4.setEmployee(dummyEmployee4);
};

module.exports = seedDB;
