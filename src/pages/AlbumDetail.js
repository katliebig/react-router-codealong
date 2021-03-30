import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

const AlbumDetail = () => {
  const [details, setDetails] = useState([])
  const { idAlbum } = useParams()

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${idAlbum}`)
      .then(res => res.json())
      .then(json => setDetails(json.album[0]))
  }, [idAlbum])


  return (
    <div>
      <h2>{details.strAlbum} ({details.intYearReleased})</h2>
      <img src={`${details.strAlbumThumb}/preview`} alt={details.strAlbum} />
      <p>{details.strDescriptionEN}</p>
    </div>
  )
}
export default AlbumDetail