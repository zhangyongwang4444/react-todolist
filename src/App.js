import React, { Component } from 'react';

import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import * as localStore from './localStore'
import 'normalize.css'
import './reset.css'

var AV = require('leancloud-storage');
var APP_ID = 'Cq846eABT06Jse8YwqavT0Aj-gzGzoHsz';
var APP_KEY = 'P7GhyCurG4aX3b3Q5iaISRAg';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello FCH!'
}).then(function(object) {
  alert('地面调温冷暖舒适系统!');
})



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: localStore.load('todoList') || []
    }
  }
  render() {
    let todos = this.state.todoList
      .filter((item) => !item.deleted)
      .map((item, index) => {
        return (
          <li key={index}>
            <TodoItem todo={item} onToggle={this.toggle.bind(this)}
              onDelete={this.delete.bind(this)} />
          </li>
        )
      })
    console.log('todos')
    console.log(todos)
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput
            content={this.state.newTodo}
            onSubmit={this.addTodo.bind(this)}
            onChange={this.changeTitle.bind(this)} />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    );
  }
  componentDidUpdate(){
    localStore.save('todoList', this.state.todoList)
  }
  addTodo(event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
    
  }
  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
    
  }
  changeTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
    
  }
  delete(event, todo) {
    todo.deleted = true
    this.setState(this.state)
    
  }
}

export default App;

let id = 0;
function idMaker() {
  id += 1
  return id
}
