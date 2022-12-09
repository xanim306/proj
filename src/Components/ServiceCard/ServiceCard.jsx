import icon from  "../../assets/images/01_icon_brain.png";
import vector from  "../../assets/images/Vector.png";
import "../../assets/css/ServiceCard.css";

function ServiceCard(props) {
  return(
    <div className="services_cards-item">
    <div className="services_card_icon">
        <img src={props.src} alt="image" />
    </div>
    <div className="services_card_title">
      <h3>{props.title}</h3>
    </div>
    <div className="services_card_description">
      <p>
        {props.description}
      </p>
    </div>
    <div className="services_card_button">
        <a href="#" className="services_card_button_link">Read More</a>
        <div className="services_card_button_icon">
            <img src={vector} alt="vector" />
        </div>
    </div>
  </div>
  );
}

export default ServiceCard;
