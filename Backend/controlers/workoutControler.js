//importing schemas
const Workout=require('../models/workoutMdodel')

const mongoose =require('mongoose')

// get all workouts
const getWorkouts=async(req,res)=>{
const workouts=await Workout.find({}).sort({createAt: -1})
res.status(200).json(workouts)
}

//get single workout
const getworkout=async(req,res)=>{
    const{id}=req. params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout =await Workout.findById(id)

    if(!workout){
        return res.status(400).json({error:"No such a workout"})
    }
    res.status(200).json(workout)
}

//create a new workout
const createWorkout=async(req,res)=>{

  const{title,reps,load}=req.body
  //add to db
  try{
const workout = await Workout.create({title,reps,load})
res.status(200).json(workout)
  }catch(error){
res.status(404).json({error: error.message})
  }s
}

//delete a workout

const deleteWorkout=async(req,res)=>{
    const{id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    const workout=await Workout.findOneAndDelete({_id:id})

    if(!workout){
      return  res.status(404).json({error:"No suck workout"})
    }
    res.status(200).json(workout)
}


//update a workout
const updateWorkout=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout= await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return  res.status(404).json({error:"No suck workout"})
      }
      res.status(200).json(workout)
}




module.exports={
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateWorkout
}