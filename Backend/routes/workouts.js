const express = require('express')

//importing schemas
const Workout=require('../models/workoutMdodel')

//creating router
const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// get a single workout
router.get('/:id',(req, res) => {
  res.json({mssg: 'GET a single workout'})
})

// post a new workout
router.post('/', async(req, res) => {
  //detail of schema
  const{title,reps,load}=req.body
  try{
const workout = await Workout.create({title,reps,load})
res.status(200).json(workout)
  }catch(error){
res.status(400).json({error: error.message})
  }
})

// delete a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'})
})

// update a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

module.exports = router