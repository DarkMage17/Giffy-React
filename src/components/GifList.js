import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function GifList({params}){
  const {keyword} = params
  const [loading, setLoading] = useState(false)

  const [gifs, setGifs] = useState([])

  useEffect(function() {
    setLoading(true)
    getGifs({keyword})
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if(loading) return <i>Loading...</i>
  return <div>
    {
      gifs.map(gif => 
        <Gif
          id={gif.id}
          key={gif.id}
          title={gif.title}
          url={gif.url}
        />
        )
    }
  </div>
}