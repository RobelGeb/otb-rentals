import SneakerItem from './SneakerItem.js';
import sneakerpic from '../img/yeezy700.jpg'

function SneakerList() {
  return(
    <div>
        <SneakerItem name="Yeezy 700 Wave Runner" sneakerImage={sneakerpic} condition="Good" price="$50"/>
    </div>
  );
}

export default SneakerList;