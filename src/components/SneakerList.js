import SneakerItem from './SneakerItem.js';
import './Sneaker.css';
import { Link } from 'react-router-dom';

function SneakerList(props) {

  let userResults = props.userResults;
  if(userResults === undefined) {
    userResults = props.originalResults;
  }

  return(
    <div class='sneaker-grid'>
      {userResults && userResults.map((shoe) => {
        return <Link className="shoe-link-tag" to="/shoe"
                state={{
                  name: shoe.name.toString(),
                  image: shoe.sneakerImage.toString(),
                  price: shoe.price.toString()

                }}>
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