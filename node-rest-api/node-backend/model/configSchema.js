const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employees = new Schema({
    e_id: {
      type: int
    },
    e_name: {
      type: String
    },
    e_username: {
      type: String
    },
    e_email: {
        type: String
    },
    e_role: {
        type: int
    },
    e_active: {
        type: int
    },
    e_contact: {
        type: String
    }
    
  }, {
    collection: 'Employees'
  })
   
  module.exports = mongoose.model('Employees', Employees)