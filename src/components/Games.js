import React from "react"
import GameBlock from "./GameBlock"
import "../assets/css/games.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import gameBlock from "../assets/data/gameBlock"

class Games extends React.Component{
    render(){
        const game = gameBlock.map(game => <GameBlock games={{name : game.name, img : game.img}}/>)
        return (
            <div className="games effect2">
                <div className="games-header">
                    <h3>Games you will build</h3>
                    <a href="#">Know More <AiOutlineArrowRight /></a>
                </div>
                <div className="games-content">
                    {game}
                </div>
            </div>
        )
    }
}

export default Games