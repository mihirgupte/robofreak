import React from "react"

function GameBlock(props){
    return (
        <div className="game-block">
            <a href="#"><img src={props.games.img}/>
            <p>{props.games.name}</p></a>
        </div>
    )
}

export default GameBlock