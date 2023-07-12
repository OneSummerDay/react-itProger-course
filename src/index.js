import React from "react"
import  *  as ReactDOMClient from "react-dom/client"


const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help Text!"

const Header = () => {
  return (
  <header>The Header</header>)
}

const App = () => {
  return (<div className="name">
    <Header />
    <h1>{helpText}</h1>
    <input placeholder={helpText}
      onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText === "Help Text!" ? "Yes" : "No"}</p>
  </div>)
}

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)