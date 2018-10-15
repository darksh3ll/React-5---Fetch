import React from "react";

const GenerateEmployee= ({add}) => {
    return (
        <div className="GenerateEmployee">
            <button className="search" onClick={add}>Chercher un employer</button>
        </div>
    )
};

export default GenerateEmployee