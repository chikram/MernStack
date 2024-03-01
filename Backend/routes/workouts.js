const express = require('express')

//exporting the controller
const {
  createWorkout,
  getWorkouts,
  getworkout,
  deleteWorkout,
  updateWorkout
} = require('../controlers/workoutControler')

//creating router
const router = express.Router()

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getworkout)

// post a new workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

// update a workout
router.patch('/:id', updateWorkout)

module.exports = router