import React, { Component } from 'react';

import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import UserDialog from './UserDialog'
import { getCurrentUser, signOut, TodoModel } from './leanCloud'
import { JSONParse } from './JSONParse'

import 'normalize.css'
import './reset.css'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: getCurrentUser() || {},
      newTodo: '',
      todoList: []
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
        <h1>{this.state.user.username || '我'}的待办
          {this.state.user.id ? <button onClick={this.signOut.bind(this)}>登出</button> : null}
        </h1>

        <div className="inputWrapper">
          <TodoInput
            content={this.state.newTodo}
            onSubmit={this.addTodo.bind(this)}
            onChange={this.changeTitle.bind(this)} />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
        {this.state.user.id ?
          null :
          <UserDialog
            onSignUp={this.onSignUpOrSignIn.bind(this)}
            onSignIn={this.onSignUpOrSignIn.bind(this)} />}
      </div>
    );
  }
  signOut() {
    signOut()
    let stateCopy = JSONParse(this.state)
    stateCopy.user = {}
    this.setState(stateCopy)
  }

  onSignUpOrSignIn(user) {
    let stateCopy = JSONParse(this.state)
    stateCopy.user = user
    this.setState(stateCopy)
  }
  componentDidUpdate() {

  }

  addTodo(event) {
    let newTodo = {
      title: event.target.value,
      status: null,
      deleted: false
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }, (error) => {
      console.log(error)
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
