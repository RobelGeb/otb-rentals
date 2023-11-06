import './Sneaker.css';

function SneakerItem(props) {
  return (
    <div class="sneaker-item">
      <h3 id="shoe-name">{props.name}</h3>
      <img id="shoe-image" src={props.sneakerImage} alt="sneaker" />

      <div id="shoe-details">
        <p class="shoe-price">{ props.condition }</p>
        <p class="shoe-price" id="price">{ props.price }</p>
      </div>
    </div>
  )
}

export default SneakerItem;