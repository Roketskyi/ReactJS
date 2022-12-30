import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  return (
    <div class="all">
      <div class="setAge">
        <p>You are {age} years old</p>
        <button onClick={() => setAge(age + 1)}>+</button>
        <button onClick={() => setAge(age - 1)}>-</button>
        <br></br>
        <button onClick={() => setAge(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App;
