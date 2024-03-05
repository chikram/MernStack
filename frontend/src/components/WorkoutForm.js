import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)


    //e event object
    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {

            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <h2 className="text-light">Add a New Workout </h2>
                <label for="text1" className="form-label text-light">Excercise Title</label>
                <input type="text" className="form-control" id="text1"
                    onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className="mb-3">
                <label for="num1" className="form-label text-light">Load(Kg)</label>
                <input type="number" className="form-control" id="num1"
                    onChange={(e) => setLoad(e.target.value)} value={load} />
            </div>
            <div className="mb-3">
                <label for="num2" className="form-label text-light">Reps</label>
                <input type="number" className="form-control" id="num2"
                    onChange={(e) => setReps(e.target.value)} value={reps} />
            </div>
            <button type="submit" className="btn btn-primary">Add Workout</button>
        </form>
    )

}



export default WorkoutForm