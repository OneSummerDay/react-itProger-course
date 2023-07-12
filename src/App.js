import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/logo-og.png"


class App extends React.Component {
  helpText = "Help Text!"
  render() {
    return (
    <div className="name">
      <Header />
      <h1>{this.helpText}</h1>
      <input placeholder={this.helpText}
        onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
      <p>{this.helpText === "Help Text!" ? "Yes" : "No"}</p>
      <Image image={logo} />
      <img src={this.props.image} />
    </div>
    )

    const inputClick = () => {
      console.log("Clicked")
    }

    const mouseOver= () => {
      console.log("Mouse Over")
    }
  }
}

export default App