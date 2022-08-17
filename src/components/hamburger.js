import React from 'react';

const Hamburger = ({ hamburger }) => {
    // Add Images on every element in hamburger
    //
    return(
        <div>
            <h1>Hamburger</h1>
            <div className="bread -top"></div>
                <div>
                    {hamburger.map(item => <img src={`http://localhost:3000/${item.name}.jpeg`}/>)}
                </div>
            <div className="bread -bottom"></div>
        </div>
    )
}

export default Hamburger;