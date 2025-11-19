import { Card, Carousel } from "antd";

import "./Apartments.css";
import type { ApartmentSectionProps } from "../../models/ApartmentSectionProps";

const AccommodationCardBox = ({ title, socialMediaLink, description, images }: ApartmentSectionProps) => {
  const concatTitleDesc = (
    <div style={{ textAlign: "center" }}>
      <h3>{title}</h3>
      <p
        style={{
          margin: "0px 0px 5px 0px",
        }}>
        {description}
      </p>
      {socialMediaLink}
    </div>
  );

  const slideImages = (
    <Carousel autoplay draggable style={{ cursor: "pointer" }} pauseOnHover={false}>
      {images.map((img, index) => (
        <img key={index} alt={img} src={img} className="apartments-card-box-image" />
      ))}
    </Carousel>
  );

  return <Card className="apartments-card-box" title={concatTitleDesc} cover={slideImages} />;
};

export default AccommodationCardBox;
