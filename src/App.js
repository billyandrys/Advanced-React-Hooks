import React, {  useRef, useEffect, useState } from 'react'


function App() {
  const obj = useRef(100)
  const [count, setCount] = useState(0)
  useEffect(()=>{
      console.log('Effect')
  },[obj])

  useEffect(()=>{
    console.log('Effect ', obj)
},[count])
  
  console.log('ref object ', obj)
  return(
    <div>
        <h1 onClick={()=>{
          obj.current *= 5
          console.log('new object ref', obj)
        }}>Hello world { count }</h1>
    </div>
  )
}

export default App;
