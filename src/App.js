import React, { Fragment, useState, useEffect } from "react";
import Form from "./Components/Form";
import Song from "./Components/Song";
import Info from "./Components/Info";

import axios from "axios";

function App() {
  const [searchLetter, setSearchLetter] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    // Si el objeto esta vacio
    if (Object.keys(searchLetter).length === 0) return;

    const consultApiLyrics = async () => {
      const { artist, song } = searchLetter;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyrics, info] = await Promise.all([axios(url), axios(url2)]);

      setLyrics(lyrics.data.lyrics);
      setInfo(info.data.artists[0]);

      // setLyrics(result.data.lyrics);
    };

    consultApiLyrics();
  }, [searchLetter, info]);

  return (
    <Fragment>
      <Form setSearchLetter={setSearchLetter} />

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
