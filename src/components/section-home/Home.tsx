import { Carousel } from "antd";
import { useIntl } from "react-intl";

import photo1 from "../../resources/home-images/slika-1.jpg";
import photo2 from "../../resources/home-images/slika-2.jpg";
import photo4 from "../../resources/home-images/slika-4.jpg";
import "./Home.css";

const Home = () => {
  const intl = useIntl();

  const photoSlider: string[] = [photo1, photo2, photo4];

  return (
    <div id="home" className="for-us-wrapper">
      <div className="for-us-left">
        <Carousel autoplay={true} autoplaySpeed={2500} arrows={true} pauseOnHover={false}>
          {photoSlider.map((ph) => (
            <img key={ph} src={ph} />
          ))}
        </Carousel>
      </div>

      <div className="for-us-right">
        <h1
          style={{
            marginBottom: "1.5rem",
            color: "#383848",
          }}>
          {intl.formatMessage({
            id: "section.forUs.title",
            defaultMessage: "Welcome to Krusevska Odaja",
          })}
        </h1>
        <h5
          style={{
            color: "#9a9a9a",
          }}>
          {intl.formatMessage({
            id: "section.forUs.h5",
            defaultMessage: "The best ethic & traditional restaurant in city Krusevo",
          })}
        </h5>

        <p className="for-us-text">
          {intl.formatMessage({
            id: "section.forUs.p",
          })}
        </p>
      </div>
    </div>
  );
};

export default Home;
