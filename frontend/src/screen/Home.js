import { useState, useEffect } from "react"

import WorkoutsDetail from "../components/WorkoutsDetail"


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
            <div className="container my-5">
                {workouts && workouts.map((workout)=>(

                    <WorkoutsDetail key={workout._id} prob={workout}/>
                ))}
                
            </div>
        </>
    )
}
export default Home