
const WorkoutsDetail = ({ prob }) => {
  const formateTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formatedDate = date.toLocaleString("en-us", options);
    return formatedDate;
  };
  return (
    <div className="card my-3" >
      <div className="card-body">
        <h5 className="card-title text-dark fw-bold">{prob.title}</h5>
        <p className="card-text"><strong>Load(kg):</strong><span className="mx-1">{prob.load}</span></p>
        <p className="card-text"><strong>Reps:</strong><span className="mx-2">{prob.reps}</span></p>
        <p className="card-text text-success">{formateTimeStamp(prob.createdAt)}</p>
      </div>
    </div>
  )
}

export default WorkoutsDetail