import React, { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });
  const [error, setError] = useState(false);

  const { artist, song } = search;

  // Funcion a cada input para leer su contenido
  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  // Consultar las apis

  const searchInformation = e => {
    e.preventDefault();

    // Validamos si esta vacion
    if(artist.trim() === '' || song.trim() === ''){
      setError(true)
      return;
    }

    setError(false)

    // pasar al componente principal
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form onSubmit={searchInformation} className="col card text-white bg-transparent mb-5 pt-5 pb-2">
            <fieldset>
              <legend className="text-center">Buscador - Song lyrics</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre Artista"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre Cancion"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
