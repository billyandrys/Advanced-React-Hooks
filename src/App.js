import React, { useState, useEffect } from 'react'

function Child() {
  useEffect(()=>{
    console.log('\tChild update')
    return ()=>{
      console.log('\tchild Cleanup called')
    }
  })
  return <h1> I am Child </h1>
}

function App() {
  console.log('-------------> App render stared - incial --------------------')
  const [count, setCount] = useState(()=>{
    console.log('> Lazy init I called llamda 1')
    return 0
  })
  const [show, setShow] = useState(()=>{
    console.log('> Lazy init 2 called llamada 2')
    return false
  })
  useEffect(()=>{
    console.log('> Counter updated se actualiza contador')
    if(count === 5) {
      setShow(true)
    }
    return ()=>{ console.log('> Cleaning up effect of counter')}
  }, [count])

const AppComponent = <div>
  <h1 onClick={()=>setCount((count)=> count + 1)}>
    Counter 1: {count}
  </h1>
  <br/>
  {show && <Child/>}
</div>  

  console.log('> App render ended')
  return AppComponent
}

export default App;
