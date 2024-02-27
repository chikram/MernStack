import { useState, useEffect } from "react"

import WorkoutsDetail from "../components/WorkoutsDetail"
import WorkoutForm from "../components/WorkoutForm"


function Home() {
    const[workouts,setWorkouts]=useState(null)
    useEffect(() => {
     const fetchWorkouts=async()=>{
      const response= await fetch('/api/workouts')
     const json= await response.json()

     if(response.ok){
       setWorkouts(json)
     }
     }
     fetchWorkouts()

    }, [])
    return (
        <>
        <div className="row">
            <div className="col-6 ms-4 my-5">
                {workouts && workouts.map((workout)=>(

                    <WorkoutsDetail key={workout._id} prob={workout}/>
                ))}
            </div>
            <div className="col-4 my-5">
            <WorkoutForm/>
            </div>
           
            </div>
        </>
    )
}
export default Home