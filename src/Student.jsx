import Score from './Score'

const Student = (props) => {
  return (
    <div>
      {props.students.map((student, idx) => 
        <div key={idx} className="card">
          <h2>{student.name}</h2>
          <h4>About Me: {student.bio}</h4>
          <h4><Score scores={student.scores}/></h4>
          <br/>
        </div>
        )}
    </div>
  )
}

export default Student