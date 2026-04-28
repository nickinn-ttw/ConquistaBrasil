const FavoritesTeam = () =>{

    const [favorite, setFavorite] = useState([])

    const favoritador = (event) =>{
        setFavorite(event.target.value)
      }

    return(
        <div>
             <button onClick={favoritador}>Favoritar</button>
        </div>
    )
}

export default FavoritesTeam