import React from "react";

const Image = (props) => {
    const {dataurl} = props;

    return (
        <div>
            <img src= {dataurl} />
        </div>
    )
}

export default Image;