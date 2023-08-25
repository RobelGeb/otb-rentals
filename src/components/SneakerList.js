import Sneaker from './SneakerItem.js';

function SneakerList() {
    const colors = [red, gray, black];
    return(
        <div>

            <Sneaker colors={ colors }/>
            <Sneaker colors={ colors }/>
            <Sneaker colors={ colors }/>
        </div>
    );
}