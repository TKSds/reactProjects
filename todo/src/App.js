import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddToDo from "./components/AddToDo";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import About from "./components/pages/About";
// import uuid from "uuid";
import axios from "axios";

// redirects to /login if user is not authenticated
function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-231432.okta.com/oauth2/default"
          clientId="0oa13pqklSl16ytAj4x6"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
          pkce={true}
        >
          <div className="App">
            <div className="container">
              <Header />
              <SecureRoute
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <AddToDo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </React.Fragment>
                )}
              />
              <SecureRoute path="/about" component={About} />
              <SecureRoute path="/contact" component={Contact} />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-231432.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Footer />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
