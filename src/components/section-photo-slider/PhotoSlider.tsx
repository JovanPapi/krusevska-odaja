import { Carousel } from "antd";

import photo1 from "../../resources/home-images/slika-1.jpg";
import photo2 from "../../resources/home-images/slika-2.jpg";
import photo4 from "../../resources/home-images/slika-4.jpg";

import "./PhotoSlider.css";

const PhotoSlider = () => {
  const photoSlider: string[] = [photo1, photo2, photo4];

  return (
    <div id="photo-slider" className="photo-slider-wrapper">
      <Carousel effect="fade" autoplay={true} autoplaySpeed={1500} arrows={true} pauseOnHover={false}>
        {photoSlider.map((photo, index) => (
          <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
            <img
              key={index}
              alt={photo}
              src={photo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoSlider;
