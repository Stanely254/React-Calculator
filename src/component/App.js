import React, { Component } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends Component{
  constructor(){
    super()
    this.state = {
      total: null,
      next: null,
      operation: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(buttonName){
    this.setState(calculate(this.state, buttonName))
  }
  
  render(){
    return(
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

export default App