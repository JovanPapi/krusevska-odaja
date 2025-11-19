import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";

import BackToTop from "./components/back-to-top/BackToTop";
import Accommodation from "./components/section-accomodation/Accommodation";
import Header from "./components/section-application-header/Header";
import KrusevoDetails from "./components/section-for-krusevo/KrusevoDetails";
import ForUs from "./components/section-for-us/ForUs";
import MapLocation from "./components/section-map-location/MapLocation";
import RestaurantMenu from "./components/section-menu/RestaurantMenu";
import PhotoSlider from "./components/section-photo-slider/PhotoSlider";
import SpecialitiesOfTheHouse from "./components/section-specialities/SpecialitiesOfTheHouse";

const { Header: HeaderLayout, Content, Footer: FooterLayout } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderLayout
        style={{
          height: "fit-content",
          padding: 0,
        }}>
        <Header />
      </HeaderLayout>
      <Content style={{ padding: 0 }}>
        <BackToTop />
        <PhotoSlider />

        <ForUs />

        <SpecialitiesOfTheHouse />

        <RestaurantMenu />

        <Accommodation />

        <KrusevoDetails />

        <MapLocation />
      </Content>

      <FooterLayout style={{ padding: 0, margin: 0, fontSize: "1.3rem" }}>
        <Footer />
      </FooterLayout>
    </Layout>
  );
};

export default App;
