import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useIntl } from "react-intl";

import { menuProductImages } from "../../resources/foodImagesState";
import useAppStore from "../../store/ApplicationStore";
import { useLanguageSwitcherSelector } from "../../store/LanguageSwitcher";
import "./SpecialitiesOfTheHouse.css";

const SpecialitiesOfTheHouse = () => {
  const intl = useIntl();

  const { listOfProducts } = useAppStore();

  const { currentLanguage } = useLanguageSwitcherSelector();

  const specialitiesOfTheHouse = listOfProducts.filter((product) => product.productCategory === "SPECIALITIES");

  const specialitiesProductImages = menuProductImages["SPECIALITIES"];

  return (
    <div id="our-specialities" className="specialities-of-the-house-wrapper">
      <div className="specialities-of-the-house-wrapper-inner">
        <div style={{ marginBottom: "3rem" }}>
          <h1
            style={{
              color: "#ffbc2b",
            }}>
            {intl.formatMessage({
              id: "section.specialities.h1",
              defaultMessage: "Our Specialities",
            })}
          </h1>
          <p style={{ color: "white" }}>
            {intl.formatMessage({
              id: "section.specialities.p",
              defaultMessage:
                "Crafted with passion, every dish reflects the love and dedication of our chefs — a perfect blend of tradition, taste, and merak.",
            })}
          </p>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {specialitiesOfTheHouse.map((product, index) => (
            <Col key={product.name} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                }}
                cover={
                  <img
                    alt={specialitiesProductImages[index]}
                    src={specialitiesProductImages[index]}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                }>
                <Meta
                  title={
                    <span style={{ fontWeight: "bold", color: "#383848" }}>
                      {currentLanguage === "en" ? product.name : product.nameTranslated}
                    </span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SpecialitiesOfTheHouse;
