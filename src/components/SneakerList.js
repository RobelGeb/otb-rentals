import SneakerItem from './SneakerItem.js';
import './Sneaker.css';

function SneakerList(props) {

  console.log(props);

  let results;
  if(props.selectResults === undefined && props.searchResults === undefined) {
    // use default - show all
    results = props.originalResults;
  } else if(props.selectResults === undefined) {
    // use searchResults
    results = props.searchResults;
  } else {
    // use selectResults
    results = props.selectResults;
  }

  /*
  const sneakerItems = results.map((shoe) => {
    return <SneakerItem key={shoe.id.toString()} name={shoe.name} sneakerImage={shoe.sneakerImage} condition={shoe.condition} price={shoe.price} brand ={shoe.brand} />;
  })
  */

  return(
    <div className='sneaker-grid'>
    </div>
  );
}

export default SneakerList;