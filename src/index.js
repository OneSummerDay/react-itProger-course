import React from "react"
import  *  as ReactDOMClient from "react-dom/client"

class Header extends React.Component {
  render() {
    return (
      <header>The Header</header>
    )
  }
}

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

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)