import { Card } from "antd";
import krusevoImg from "../../resources/for-krusevo/krusevo.webp";
import makedoniumImg from "../../resources/for-krusevo/makedonium.jpg";
import paragladingImg from "../../resources/for-krusevo/paraglading.jpg";
import "./KrusevoDetails.css";
import { useIntl } from "react-intl";

const { Meta } = Card;

const KrusevoDetails = () => {
  const intl = useIntl();

  return (
    <div id="for-krusevo" className="krusevo-details-wrapper">
      <div className="krusevo-details-wrapper-inner">
        <h1
          style={{
            textAlign: "center",
            color: "#383848",
          }}
        >
          {intl.formatMessage({
            id: "section.for.krusevo.h1",
            defaultMessage: "For Krusevo",
          })}
        </h1>
        <h5
          style={{
            textAlign: "center",
            color: "#9a9a9a",
          }}
        >
          {intl.formatMessage({
            id: "section.for.krusevo.h5",
          })}
        </h5>

        <div className="krusevo-slideshow-wrapper">
          <Card
            hoverable
            style={{ maxWidth: 350, minWidth: 300 }}
            cover={
              <img
                alt="krusevo"
                src={krusevoImg}
                className="krusevo-slideshow-element-image"
              />
            }
          >
            <Meta
              title={
                <h4 style={{ margin: 0 }}>
                  {intl.formatMessage({
                    id: "section.for.krusevo.card1.h4",
                    defaultMessage: "Fresh air and untouched nature",
                  })}
                </h4>
              }
              description={intl.formatMessage({
                id: "section.for.krusevo.card1.desc",
              })}
            />
          </Card>

          <Card
            hoverable
            style={{ maxWidth: 350, minWidth: 300 }}
            cover={
              <img
                alt="makedonium"
                src={makedoniumImg}
                className="krusevo-slideshow-element-image"
              />
            }
          >
            <Meta
              title={
                <h4 style={{ margin: 0 }}>
                  {intl.formatMessage({
                    id: "section.for.krusevo.card2.h4",
                    defaultMessage: "History and culture",
                  })}
                </h4>
              }
              description={intl.formatMessage({
                id: "section.for.krusevo.card2.desc",
              })}
            />
          </Card>

          <Card
            hoverable
            style={{ maxWidth: 350, minWidth: 300 }}
            cover={
              <img
                alt="paraglading"
                src={paragladingImg}
                className="krusevo-slideshow-element-image"
              />
            }
          >
            <Meta
              title={
                <h4 style={{ margin: 0 }}>
                  {intl.formatMessage({
                    id: "section.for.krusevo.card3.h4",
                  })}
                </h4>
              }
              description={intl.formatMessage({
                id: "section.for.krusevo.card3.desc",
              })}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KrusevoDetails;
