import SneakerItem from './SneakerItem.js';
import './Sneaker.css';
import { Link } from 'react-router-dom';

function SneakerList(props) {

  let userResults = props.userResults;

  if(userResults === undefined) {
    userResults = props.originalResults;
  }

  return(
    <div className='sneaker-grid'>
      {userResults && userResults.map((shoe) => {
        return <Link to="/shoe">
                <SneakerItem key={shoe.id.toString()} 
                  name={shoe.name} 
                  sneakerImage={shoe.sneakerImage} 
                  condition={shoe.condition} 
                  price={shoe.price} 
                  brand={shoe.brand} 
                />
              </Link>
      })}
    </div>
  );
}

export default SneakerList;