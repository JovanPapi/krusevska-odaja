import { useIntl } from "react-intl";
import {
  papiApartmentImages,
  vilaMunteImages,
} from "../../resources/apartmentImagesState";
import AccommodationCardBox from "./AccommodationCardBox";
import "./Apartments.css";
import SocialMediaLink from "./SocialMediaLink";

const Accommodation: React.FC = () => {
  const intl = useIntl();

  return (
    <div id="apartments" className="apartments-wrapper">
      <div className="apartments-wrapper-inner">
        <h1
          style={{
            marginBottom: "3rem",
            color: "#383848",
          }}
        >
          {intl.formatMessage({
            id: "section.accommodation.title",
            defaultMessage: "Accommodation",
          })}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <AccommodationCardBox
            title={intl.formatMessage({
              id: "section.accommodation.box.papi.title",
              defaultMessage: "Papi Apartments",
            })}
            socialMediaLink={
              <SocialMediaLink
                facebookLink="https://www.facebook.com/apartmentspapi"
                instagramLink="https://www.instagram.com/papiapartments/?hl=en"
              />
            }
            description={intl.formatMessage({
              id: "section.accommodation.box.papi.desc",
              defaultMessage: "With a great view comes great responsibility!",
            })}
            images={papiApartmentImages}
          />
          <AccommodationCardBox
            title={intl.formatMessage({
              id: "section.accommodation.box.munte.title",
              defaultMessage: "Vila La Munte",
            })}
            socialMediaLink={
              <SocialMediaLink instagramLink="https://www.instagram.com/villalamunte/?hl=en" />
            }
            description={intl.formatMessage({
              id: "section.accommodation.box.munte.desc",
              defaultMessage: "In Krushevo, but same as home!",
            })}
            images={vilaMunteImages}
          />
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
