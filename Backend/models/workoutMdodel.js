const mongoose = require('mongoose'); 

const Schema=mongoose.Schema

const WorkoutScheme = new Schema({ 
	title: { 
		type: String, 
		require: true
	}, 
	reps: { 
		type: Number, 
		require: true
	}, 
	load:{
        type:Number,
        require:true
    }
},{timestamps:true}) 

//mongoose.model('Workout',WorkoutScheme) this create a collection with the name workout in db and store data according to workoutscheme
module.exports=mongoose.model('Workout',WorkoutScheme)
