const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // Add model
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
