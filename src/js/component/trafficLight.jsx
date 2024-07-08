import React, { useState } from "react";

const TrafficLight = () => {

    let [color, setColor] = useState("");

    function changeColor(event) {
        setColor(event.target.name);
    }

    return (
        <div className="container">
            <div className="light-box">
                <input type="button" onClick={changeColor} name="red"
                    className={`${color === 'red' ? 'shadow' : 'opacity-75'} rounded-circle bg-danger m-2`}
                    style={{ height: "50px", width: "50px" }}>
                </input>

                <input type="button" onClick={changeColor} name="yellow"
                    className={`${color === 'yellow' ? 'shadow' : 'opacity-75'} rounded-circle bg-warning m-2`}
                    style={{ height: "50px", width: "50px" }}>
                </input>

                <input type="button" onClick={changeColor} name="green"
                    className={`${color === 'green' ? 'shadow' : 'opacity-75'} rounded-circle bg-success m-2`}
                    style={{ height: "50px", width: "50px" }}>
                </input>
            </div>
            <div className="stick"></div>
            <img src="https://png.pngtree.com/png-vector/20220919/ourmid/pngtree-london-policeman-police-officer-cartoon-london-policeman-hips-law-enforcement-vector-png-image_14615424.png" />
        </div>
    );
};

export default TrafficLight;