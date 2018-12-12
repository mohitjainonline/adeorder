import React from 'react'
import {todoContainer} from '../api/SaleOrders'
export default class HelloMeteor extends React.Component {
constructor(){
   super()
   this.state = {
       todo: "",
       list: [],
    }
  }
  componentWillMount(){
    Tracker.autorun(()=>{
    var todos = todoContainer.find({}).fetch()
    this.setState({list: todos})
  })
 }
handleChange(e){
   var todo = this.refs.input.value
   this.setState({todo: todo})
}
render(){
    console.log(this.state.list);
  return (
    <div>
      <input onChange={this.handleChange.bind(this)} ref="input"/>
      <h1>{this.state.todo}</h1>
    </div>
   )
  }
}

