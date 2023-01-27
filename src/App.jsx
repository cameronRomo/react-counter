import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/Movies";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/LoginForm";
import Register from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({
      counters,
    });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
