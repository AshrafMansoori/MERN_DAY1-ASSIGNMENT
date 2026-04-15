import './App.css'
export function ViewStudents({ students, show, toggle,setStudents }) {
 const deleteStudent = (id) => {
  setStudents(students.filter(s => s.id !== id));
  
};
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
                <div className="data"key={s.id}>
                  
                  
                 {index+1} .||{s.name} || {s.age} || {s.course} <button id="delete" onClick={() => deleteStudent(s.id)}>
  delete
</button>
                  
                </div>
              ))
            )}
          </div>
        )}
        </>
        )};