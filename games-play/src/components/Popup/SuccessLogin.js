import './SuccessLogin.css';
import { useHistory } from 'react-router-dom';


export default function SuccessLogin() {
    const history = useHistory();

    const buttonHandler = (e) => {
    
        if (e.target.textContent === 'Continue') {
            history.push('/');
            return;
        }
    }

    return (
        <div className='success-popup-container'>
            <article className='success-popup-content'>
                <i class="fa-solid fa-circle-check"></i>
                <h1 className='success'>Success</h1>
                <p>Go trough the app and enjoy all futures.</p>
                <button className='success-popup-btn' onClick={buttonHandler}>Continue</button>
            </article>
        </div>
    );

}
