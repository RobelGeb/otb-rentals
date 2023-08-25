import sneaker from '../img/blue-jordan-1.png';
import './SneakerItem.css';

function SneakerItem(props) {
    const colors = props.colors;
    return (
        <div>
            <div>
                <img id="shoe" src={ sneaker } alt="shoe" />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                    
                </ul>
            </div>
        </div>
    );
}