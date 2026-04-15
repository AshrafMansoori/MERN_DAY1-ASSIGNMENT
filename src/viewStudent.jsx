import './App.css'
export function ViewStudents({ students, show, toggle }) {
  return (
  <>
  <div id="view-text"><h1>VIEW STUDENT</h1>
    <button id="view-button" onClick={toggle} style={ {height: "30px"}}>
  View Students
</button></div>
{show && (
          <div id="manage">
            {students.length === 0 ? (
              <p>No students available</p>
            ) : (
              students.map((s, index) => (
                <div className="data"key={index}>
                  
                  <p>
                  {s.name} ---- {s.age} ------ {s.course}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
        </>
        )};