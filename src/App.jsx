import { useState } from 'react'
import './App.css'
import { Student } from "./studentform";
import { ViewStudents } from "./viewStudent";

function App() {
 const [show, setShow] = useState(false);
const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0); 

  function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  data.age = Number(data.age);
   if(data.name==''||data.course==''){
      alert("All Field Are Required ")
    }
   else if (data.age > 18) {
  const newStudent = {
    ...data,
    id: Date.now()
  };

  setStudents(prev => [...prev, newStudent]);
  setCount(prev => prev + 1);
}
    else {
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
  <div>TOTAL STUDENT {students.length}</div>

  <div id="view">
   <ViewStudents 
  students={students}
  setStudents={setStudents}
  
  show={show}
  toggle={() => setShow(!show)}
/>
</div>
  <div id="manage"></div>
  </div>
  </>)
}

export default App
