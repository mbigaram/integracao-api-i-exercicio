import axios from "axios";
import React, { useEffect, useState } from "react";
import { headers } from "../../headers";
import CriarPlaylist from "../CriarPlaylist/CriarPlaylist";
import Musicas from "../Musicas/Musicas";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  //   Exercício 2 (o 1 é leitura da doc)
  const pegaPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers
      )
      .then((res) => {
        setPlaylists(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    pegaPlaylists();
  }, []);
  return (
    <div>
      <CriarPlaylist pegaPlaylists={pegaPlaylists} />
      {playlists.map((playlist) => {
        return <Musicas key={playlist.id} playlist={playlist} />;
      })}
    </div>
  );
}

export default Playlists;


