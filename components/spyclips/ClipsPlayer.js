import React from "react";
import ReactPlayer from "react-player";

const ClipsPlayer = ({ url }) => {
  return (
    <div>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        controls={false}
      />
    </div>
  );
};

export default ClipsPlayer;
