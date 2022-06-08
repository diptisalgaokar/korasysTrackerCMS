const express = require('express');
const app = express();
 
const empRoute = express.Router();
let Employees = require('../model/configSchema');
 
// Add Employee
empRoute.route('/add-employee').post((req, res, next) => {
    Employees.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all Employees
empRoute.route('/view-employee').get((req, res) => {
    Employees.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Employee
empRoute.route('/view-employee/:id').get((req, res) => {
    Employees.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update Employee
empRoute.route('/view-employee/:id').put((req, res, next) => {
    Employees.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Book updated successfully!')
    }
  })
})
 
// Delete Employee
empRoute.route('/view-employee/:id').delete((req, res, next) => {
    Employees.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = empRoute;