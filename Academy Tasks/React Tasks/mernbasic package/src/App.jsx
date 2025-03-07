import React, { useEffect, useState } from 'react'



const App = () => {

  let [numb,SetNumb] = useState(0)
  useEffect (()=>{
    console.log("Useeffect");
    
  },[numb])
  const add =()=>{
    SetNumb(++numb)
    console.log(numb);
    
  }
  return (
    <div>
      <p>{numb}</p>
      <button onClick={add}>ADD</button>
    </div>
  )
}

export default App

// USE STATE FOR ADD NUMB BY BTN
