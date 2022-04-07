import React, { useState } from 'react'

class Button extends React.Component {
  constructor(){
    super()
    this.state = {
        counter:0,
        counter2:2
    } 
 }

 render() {
   return <h1 onClick={()=>{
     this.setState({
       counter:this.state.counter + 1
     })
   }}>{this.state.counter} { this.state.counter2} </h1>
 }
}

function App() {
  
  const [state, ssetState] = useState({
    counter:0,
    counter2:10
  })

  function setState(newState) {
      ssetState(oldState => {
        return {
          ...oldState,
          ...newState
        }
      })
  }

  return (
    <div className="App">
      <h1 onClick={()=>{
        setState({
          counter: state.counter + 1 
          })
      }}> {state.counter} {state.counter2} </h1>     
    </div>
  );
}

export default App;
