import React from "react"
import Header from "./components/Header"


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