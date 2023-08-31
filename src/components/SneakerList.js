import SneakerItem from './SneakerItem.js';
import './Sneaker.css';

function SneakerList(props) {

  let results = {};
  if(props.selectResults === undefined && props.searchResults === undefined) {
    // use default - show all
    results = props.originalResults;
  } else if(props.searchResults !== undefined) {
    results = props.searchResults; // use searchResults
  } else {
    results = props.selectResults; // use selectResults
  }

  return(
    <div className='sneaker-grid'>
      {results && results.map((shoe) => {
        return <SneakerItem key={shoe.id.toString()} name={shoe.name} sneakerImage={shoe.sneakerImage} condition={shoe.condition} price={shoe.price} brand ={shoe.brand} />;
      })}
    </div>
  );
}

export default SneakerList;