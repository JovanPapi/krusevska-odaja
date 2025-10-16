import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import "./Footer.css";
import { useIntl } from "react-intl";

const Footer = () => {
  const intl = useIntl();

  return (
    <div id="contact-information" className="footer-wrapper">
      <div className="footer-wrapper-inner">
        <div style={{ textAlign: "center" }}>
          <h4>
            {intl.formatMessage({
              id: "section.footer.first.div.text",
              defaultMessage: "Find us on instagram and facebook",
            })}
          </h4>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: "2rem",
            }}
          >
            <a href="https://www.instagram.com/papiapartments/?hl=en">
              <InstagramOutlined
                style={{
                  cursor: "pointer",
                  fontSize: 24,
                  color: "gray",
                }}
              />
            </a>

            <a href="https://www.instagram.com/villalamunte/?hl=en">
              <FacebookOutlined
                style={{
                  cursor: "pointer",
                  fontSize: 24,
                  color: "gray",
                }}
              />
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4>
            {intl.formatMessage({
              id: "section.footer.second.div.h4",
              defaultMessage: "Ethic inn - Krusevska Odaja",
            })}
          </h4>
          <p>
            {intl.formatMessage({
              id: "section.footer.second.div.p1",
              defaultMessage: "Todor Proeski 517",
            })}
          </p>
          <p>
            {intl.formatMessage({
              id: "section.footer.second.div.p2",
              defaultMessage: "Krusevo, Makedonija",
            })}
          </p>
          <p>
            {intl.formatMessage({
              id: "section.footer.second.div.p3",
              defaultMessage: "075-421/947",
            })}
          </p>
          <p>
            {intl.formatMessage({
              id: "section.footer.second.div.p4",
              defaultMessage: "075-421/946",
            })}
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4>
            {intl.formatMessage({
              id: "section.footer.third.div.h4",
              defaultMessage: "Working time",
            })}
          </h4>
          <p>
            {intl.formatMessage({
              id: "section.footer.third.div.p1",
              defaultMessage: "Monday - Saturday 09:00 - 01:00",
            })}
          </p>
          <p>
            {intl.formatMessage({
              id: "section.footer.third.div.p2",
              defaultMessage: "Sunday 09:00 - 00:00",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
