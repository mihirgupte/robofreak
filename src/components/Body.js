import React from "react"
import InfoBlock from "./InfoBlock"
import "../assets/css/body.css"
import plane from "../assets/imgs/plane.svg"
import boy from "../assets/imgs/grassWithBoy.svg"

class Body extends React.Component{
    render(){
        return(
            <div className="other">
                <InfoBlock />
                <img src={plane} className="plane"/>
                <img src={boy} className="boy"/>
            </div>
        )
    }
}

export default Body