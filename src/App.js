import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/logo-og.png"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      helpText: "Help text!",
    }
  }
  
  render() {
    return (
    <div className="name">
      <Header />
      <h1>{this.state.helpText}</h1>
      <input placeholder={this.state.helpText}
        onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
      <p>{this.state.helpText === "Help Text!" ? "Yes" : "No"}</p>
      <Image image={logo} />
      <img src={this.props.image} />
    </div>
    )

    const inputClick = () => {
      this.helpText = "Changed"
      console.log("Clicked")
    }

    const mouseOver= () => {
      console.log("Mouse Over")
    }
  }
}

export default App