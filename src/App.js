import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MainComponents";
import { Component } from "react";
import Main from "./components/MainComponents";

class App extends Component {
  render() {
    return (
      <div>
        <Main></Main>
      </div>
    );
  }
}

export default App;
