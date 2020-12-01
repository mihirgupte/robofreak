import React from "react"
import Header from "./components/Header"
import Games from "./components/Games"
import Body from "./components/Body"
import "./assets/css/app.css"
import { GrGamepad } from "react-icons/gr";

class App extends React.Component{
    render(){
        return (
            <div className="main-body">
                <Header />
                <Games />
                <GrGamepad className="gamepad"/>
                <Body />
            </div>
        )
    }
}

export default App