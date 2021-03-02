import React, { Fragment } from "react";

const Song = ({ lyrics }) => {
    
  if (lyrics.length === 0) return null;

  return (
    <Fragment>
      <h2>Letra Canción</h2>
      <p className="lirycs">{lyrics}</p>
    </Fragment>
  );
};

export default Song;
