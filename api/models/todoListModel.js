var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  firstname: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  lastname: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  place: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
 
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
});

module.exports = mongoose.model('Tasks', TaskSchema);