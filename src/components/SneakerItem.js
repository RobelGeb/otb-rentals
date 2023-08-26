import './Sneaker.css';

function SneakerItem(props) {
  return (
    <div class="sneaker-item"> 
        <img id="shoeImage" src={props.sneakerImage} alt="sneaker" />
        <h3>{props.name}</h3>
        <div class="condition-price">
          <p class="condition-price">{ props.condition }</p>
          <p class="condition-price" id="price">{ props.price }</p>
        </div>
        
    </div>
  )
}

export default SneakerItem;