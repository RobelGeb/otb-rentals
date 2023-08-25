import SneakerItem from './SneakerItem.js';
import sneakerpic from '../img/yeezy700.jpg'

function SneakerList() {
  return(
    <div>
        <SneakerItem 
            brand="Nike" 
            model="Air Force 1" 
            sneakerImage={sneakerpic} 
            condition="Good" 
            price="$50"
        />
    </div>
  );
}

export default SneakerList;