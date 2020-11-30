import React from "react"
import HeaderTiles from "./HeaderTiles"
import "../assets/css/header.css"
import tiles from "../assets/data/tiles"

class Header extends React.Component{
    render(){
        const list = tiles.map(tile => <HeaderTiles key={tile.id} tiles={{name : tile.name}}/>)
        return (
            <div className="header">
                {list}
            </div>
        )
    }
}

export default Header