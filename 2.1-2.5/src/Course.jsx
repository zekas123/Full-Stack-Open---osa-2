const Course = ({ course }) => {
    return (
      <div>
        {course.map(item => {
          const totalExercises = item.parts.reduce((s, p) => s + p.exercises, 0)

          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <ul>
                {item.parts.map(part => (
                  <li key={part.id}>
                    {part.name} {part.exercises}
                  </li>
                ))}
              </ul>
              <p>total of {totalExercises} exercises</p>
            </div>
          )
        })}
      </div>
    )
  }
  
export default Course