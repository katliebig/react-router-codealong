import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=111247")
      .then(res => res.json())
      .then(json => setAlbums(json.album))
  }, [])


  return (
    <div>
      {albums.map(album => (
        <Link to={`/albums/${album.idAlbum}`} key={album.idAlbum}>
          <h2>{album.strAlbum} ({album.intYearReleased})</h2>
          <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum} />
        </Link>
      ))}
    </div>
  )
}

export default AlbumList