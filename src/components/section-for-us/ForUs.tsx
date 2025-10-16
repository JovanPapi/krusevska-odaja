import { useIntl } from "react-intl";
import photo_1 from "../../resources/for-us-images/slika-5.jpg";

import "./ForUs.css";

const ForUs = () => {
  const intl = useIntl();

  return (
    <div id="for-us" className="for-us-wrapper">
      <div className="for-us-inner-wrapper">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#383848",
          }}
        >
          {intl.formatMessage({
            id: "section.forUs.title",
            defaultMessage: "Welcome to Krusevska Odaja",
          })}
        </h1>
        <h5
          style={{
            textAlign: "center",
            color: "#9a9a9a",
          }}
        >
          {intl.formatMessage({
            id: "section.forUs.h5",
            defaultMessage:
              "The best ethic & traditional restaurant in city Krusevo",
          })}
        </h5>

        <div className="for-us-content">
          <p className="for-us-text">
            {intl.formatMessage({
              id: "section.forUs.p",
            })}
          </p>
          <img alt={photo_1} src={photo_1} className="for-us-image" />
        </div>
      </div>
    </div>
  );
};

export default ForUs;
