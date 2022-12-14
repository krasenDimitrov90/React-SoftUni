import { useState, useEffect } from "react";
import { getAllGames } from "../../servecies/requests";
import GameCard from "./Game-card";

export default function Catalog() {

    let [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames()
            .then(games => setGames(games))
    } ,[])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            { games.length > 0 
            
                ? games.map(game => <GameCard key={game._id} game={game} /> )
                : <h3 className="no-articles">No articles yet</h3> 
            }

        </section>
    );
}