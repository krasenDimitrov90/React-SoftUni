import './Error.css';


export default function Error(props) {

    const changeWrongDataState = props.changeWrongDataState;

    const buttonHandler = (e) => {
        changeWrongDataState();
    }

    return (
        <div className='error-popup-container'>
            <article className='error-popup-content'>
                <i class="fa-sharp fa-solid fa-circle-xmark"></i>
                <h1 className='error'>Error</h1>
                <p>Incorect email or password</p>
                <button className='error-popup-btn' onClick={buttonHandler}>Try again</button>
            </article>
        </div>
    );

}