import './SneakerItem.css';

function SneakerItem(props) {
  return (
    <div>
      <div>
        <h3>{props.brand} {props.model}</h3>
        <img id="shoeImage" src={props.sneakerImage} alt="sneaker" />
        <p>{ props.condition }</p>
        <p>{ props.price }</p>
      </div>
    </div>
  )
}

export default SneakerItem;