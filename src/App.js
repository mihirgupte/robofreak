import React from "react"
import Header from "./components/Header"
import Games from "./components/Games"
import Body from "./components/Body"
import "./assets/css/app.css"
import controller from "./assets/imgs/controller.png"

class App extends React.Component{
    render(){
        return (
            <div className="main-body">
                <Header />
                <Games />
                <Body />
            </div>
        )
    }
}

export default App