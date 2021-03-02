import React, { Fragment, useState, useEffect } from "react";
import Form from "./Components/Form";
import Song from './Components/Song'
import axios from "axios";

function App() {
  const [searchLetter, setSearchLetter] = useState({});
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    // Si el objeto esta vacio
    if (Object.keys(searchLetter).length === 0) return;

    const consultApiLyrics = async () => {
      const { artist, song } = searchLetter;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const result = await axios(url);

      setLyrics(result.data.lyrics);
    };

    consultApiLyrics();
  }, [searchLetter]);

  return (
    <Fragment>
      <Form setSearchLetter={setSearchLetter} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <Song lyrics={lyrics}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
