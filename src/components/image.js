import React from "react";

const Image = (props) => {
    const {dataUrl} = props;

    return (
        <div>
            <img src= {dataUrl} alt="" />
        </div>
    )
}

export default Image;