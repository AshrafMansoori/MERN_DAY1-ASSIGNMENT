import { useState } from 'react'
import './App.css'
import { Student } from "./studentform";
import { ViewStudents } from "./viewStudent";

function App() {
 const [show, setShow] = useState(false);
const [students, setStudents] = useState([]);
  

  function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  data.age = Number(data.age);

    if (data.age > 18) {
      setStudents([...students, data]);
    } else {
      alert("Age must be greater than 18");
    }
    e.target.reset();
}
  return (<>
  <div id="container">
  <div id="heading">
    <h3 id ="head">STUDENT MANAGEMENT SYSTEM</h3>
  </div>
  <div className="addsection">
    <Student  onSubmit={handleSubmit} />

  </div>

  <div id="view">
    <ViewStudents 
     students={students}
        show={show}
        toggle={() => setShow(!show)}
          />
</div>
  <div id="manage"></div>
  </div>
  </>)
}

export default App
