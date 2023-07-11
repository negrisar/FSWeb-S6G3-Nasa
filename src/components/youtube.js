import React from "react";

const Youtube = (props) => {
    const {dataUrl} = props;
    return (
        <div>
            <iframe border=" none" width="100%" height="500px" src={dataUrl} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
    )
}

export default Youtube;