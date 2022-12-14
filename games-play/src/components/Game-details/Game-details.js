import {Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import GameCard from "./Game-card-details";
import { getGame } from "../../servecies/requests";
import { getUserId } from "../../Auth/auth";

export default function GameDetails() {

    let params = useParams();

    let [game, setGame] = useState({});

    useEffect(() => {
        getGame(params.gameId)
            .then(game => setGame(game));
    }, [])

    const currentUserId = getUserId();

    const operationBtns = (gameId) => {
        return (
            <div className="buttons">
                <Link to={`/edit-game/${gameId}`} className="button">Edit</Link>
                <Link to="#" className="button">Delete</Link>
            </div>
        );
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <GameCard game={game} />

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div>

                {currentUserId === game._ownerId
                    ? operationBtns(game._id)
                    : null
                }
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}