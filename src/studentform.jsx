import './App.css'
import { useState } from 'react'

export function Student({onSubmit}) { 
    
  return (
    <>
    <h2 id="addtext">ADD STUDENT</h2>
 <div id="add">
  <form onSubmit={onSubmit}>
    <div>
      <label for="name">NAME:</label>
      <input type="text" id="name" name="name" />
    </div>

    <div>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="0" />
    </div>

    <div>
      <label for="course">Course:</label>
      <input type="text" id="course" name="course" />
    </div>
    <div id="addbutton"><button id ="addbutton"  type='submit'>ADD STUDENT</button></div>
  </form>
  
</div>
</>
  );
};

