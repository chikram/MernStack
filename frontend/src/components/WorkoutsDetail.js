
const WorkoutsDetail= ({prob})=>{
return(
    <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title text-dark fw-bold">{prob.title}</h5>
    <p className="card-text"><strong>Load(kg):</strong><span className="mx-1">{prob.load}</span></p>
    <p className="card-text"><strong>Reps:</strong><span className="mx-2">{prob.reps}</span></p>
    <p className="card-text text-success">{prob.createdAt}</p>
  </div>
</div>
)
}

export default WorkoutsDetail