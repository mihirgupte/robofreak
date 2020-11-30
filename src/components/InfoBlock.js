import React from "react"
import { FcOk } from "react-icons/fc";

function InfoBlock(){
    return (
        <div className="info-block">
            <h2>WHAT YOU GET?</h2>
            <ol style={{listStyleType: "none"}}>
                <li><FcOk /> 1:1 Doubt Sessions</li>
                <li><FcOk /> Lifetime Access to Videos</li>
                <li><FcOk /> Flexible Online Classes</li>
                <li><FcOk /> Certificate of Achievement</li>
            </ol>
        </div>
    )
}

export default InfoBlock