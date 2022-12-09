import "../../assets/css/ServicesCards.css";
import icon from  "../../assets/images/01_icon_brain.png";
import icon1 from  "../../assets/images/Vector_1.png";
import icon2 from  "../../assets/images/Vector_2.png";
import icon3 from  "../../assets/images/Vector_3.png";
import icon4 from  "../../assets/images/Vector_4.png";
import icon5 from  "../../assets/images/Vector_5.png";
import ServiceCard from "../ServiceCard/ServiceCard";

const CardData = [
  {
    src: icon,
    title: "Machine learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
  },
  {
    src: icon1,
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
  },
  {
    src: icon2,
    title: "Access control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
  },
  {
    src: icon3,
    title: "Data analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
  },
  {
    src: icon4,
    title: "Big data consulting",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
  },
  {
    src: icon5,
    title: "Artificial intelligence",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
  },
];

function ServicesCards(params) {
  return (
    <section id="service_cards">
      <div className="custom_container">
        <div className="service_cards">
        {
            CardData.map((data) => {
                return(
                    <ServiceCard src={data.src} title={data.title} description={data.description}/>
                )
            })
        }
        </div>
      </div>
    </section>
  );
}

export default ServicesCards;
