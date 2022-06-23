import React from 'react';
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return "Loading..."
    } else {
        return (
            <div>
                <h1>
                    Active Cases : <CountUp start={0} end={confirmed.value} duration={4.0} separator="," />
                </h1>
                <h1>
                    Deaths : <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                </h1>
            </div>
        );
    }
}

export default Cards;