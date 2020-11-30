import React from "react"

function HeaderTiles(props){
    console.log(props.tiles)
    return (
        <div className="tile">
            <button>{props.tiles.name}</button>
        </div>
    )
}

export default HeaderTiles