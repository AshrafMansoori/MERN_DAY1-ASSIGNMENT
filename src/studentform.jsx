import './App.css'
import { useState } from 'react'

export function Student({onSubmit}) { 
    
  return (
    <>
    <h1 id="addtext">ADD STUDENT</h1>
 <div id="add">
  <form onSubmit={onSubmit}>
    <div>
      <label htmlFor="name">NAME:</label>
      <input type="text" id="name" name="name" />
    </div>

    <div>
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" min="0" />
    </div>

    <div>
      <label htmlFor="course">Course:</label>
      <input type="text" id="course" name="course" />
    </div>
    <div id="addbutton"><button id ="add-button"  type='submit'>ADD STUDENT</button></div>
  </form>
  
</div>
</>
  );
};

