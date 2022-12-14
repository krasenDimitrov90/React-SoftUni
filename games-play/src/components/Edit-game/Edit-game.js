import { useParams } from "react-router-dom";
import { editGame } from "../../servecies/requests";


export default function EditGame() {

    const params = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        
        const gameId = params.gameId;
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        editGame(formData, gameId);
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler} >
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input type="text" id="title" name="title"  />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category"  />

                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1"  />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl"  />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}