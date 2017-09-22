const mongoose = require('mongoose');
const Task = require('../models/TaskModel');

module.exports = {
  postTask(req, res) {
    let task = new Task({
      item: req.body.item,
      created_at: req.body.created_at
    });

    task.save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  },

  getTasks(req, res) {
    Task.find({}, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  }, 

  deleteTask(req, res) {
    Task.findOneAndRemove({'_id': req.params.id}, (err, data) => {
      if (err) throw err;
      else console.log('Success!');
    });
  }
};