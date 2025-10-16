import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Grid, Menu, Pagination, Row } from "antd";
import type { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useState } from "react";
import { menuProductImages } from "../../resources/foodImagesState";
import { useApplicationStore } from "../../store/ApplicationStore";
import MenuProductItem from "./MenuProductItem";
import "./RestaurantMenu.css";
import { useIntl } from "react-intl";

const { useBreakpoint } = Grid;

const RestaurantMenu = () => {
  const intl = useIntl();

  const [current, setCurrent] = useState(1);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pageSize = 8;

  const store = useApplicationStore();

  const [productCategory, setProductCategory] = useState("SALADS");

  const screens = useBreakpoint();

  const onPaginationChange = (page: number) => {
    setCurrent(page);
  };

  const currentProducts = store.listOfProducts
    .filter((p) => p.productCategory === productCategory)
    .slice((current - 1) * pageSize, current * pageSize);

  const currentProductsImages = menuProductImages[productCategory].slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  const menuItems: ItemType<MenuItemType>[] = [
    {
      key: "SALADS",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.salads",
            defaultMessage: "Salads",
          })}
        </a>
      ),
    },
    {
      key: "GARNISH_AND_EXTRA",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.garnish",
            defaultMessage: "Garnish and extras",
          })}
        </a>
      ),
    },
    {
      key: "APPETIZERS",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.appetizers",
            defaultMessage: "Cold and hot appetizers",
          })}
        </a>
      ),
    },
    {
      key: "GRILL",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.grill",
            defaultMessage: "Grill",
          })}
        </a>
      ),
    },
    {
      key: "DISHES_TO_ORDER",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.disdhesToOrder",
            defaultMessage: "Dishes to order",
          })}
        </a>
      ),
    },
    {
      key: "SPECIALITIES",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.specialities",
            defaultMessage: "Specialities",
          })}
        </a>
      ),
    },
    {
      key: "COOKED_DISHES",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.cookedDishes",
            defaultMessage: "Cooked dishes",
          })}
        </a>
      ),
    },
    {
      key: "DESSERTS",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.deserts",
            defaultMessage: "Deserts",
          })}
        </a>
      ),
    },
    {
      key: "SNACKS",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.snacks",
            defaultMessage: "Snacks",
          })}
        </a>
      ),
    },
    {
      key: "DRINKS",
      label: (
        <a>
          {intl.formatMessage({
            id: "section.menu.menuItems.drinks",
            defaultMessage: "Drinks",
          })}
        </a>
      ),
    },
  ];

  return (
    <div className="menu-wrapper" id="menu">
      <div className="menu-wrapper-inner">
        <div>
          <h1
            style={{
              color: "#383848",
            }}
          >
            {intl.formatMessage({
              id: "section.menu.h1",
              defaultMessage: "Our special menu",
            })}
          </h1>
          <p style={{ color: "#9a9a9a", fontWeight: "bold" }}>
            {intl.formatMessage({
              id: "section.menu.p",
              defaultMessage:
                "Our menu consists of various traditional and modern food",
            })}
          </p>
        </div>

        {screens.md ? (
          <Menu
            theme="light"
            mode="horizontal"
            items={menuItems}
            style={{
              borderRadius: "1rem",
              width: "100%",
              justifyContent: "center",
            }}
            onSelect={(item) => {
              setProductCategory(item.key);
              setCurrent(1);
            }}
          />
        ) : (
          <>
            <Button
              type="text"
              icon={
                <MenuOutlined style={{ fontSize: "1.5rem", color: "black" }} />
              }
              onClick={() => setDrawerVisible(true)}
            />
            <Drawer
              title="Krusevska Odaja menu"
              placement="top"
              onClose={() => setDrawerVisible(false)}
              open={drawerVisible}
            >
              <Menu
                mode="vertical"
                items={menuItems}
                onClick={() => setDrawerVisible(false)} // close drawer after click
                onSelect={(item) => setProductCategory(item.key)}
              />
            </Drawer>
          </>
        )}

        <div
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "4rem",
          }}
        >
          <Row gutter={[20, 20]}>
            {currentProducts.map((p, index) => (
              <Col xs={12} sm={12} md={12} lg={6} key={index}>
                <MenuProductItem
                  product={p}
                  productImage={currentProductsImages[index]}
                />
              </Col>
            ))}
          </Row>
          <Pagination
            current={current}
            pageSize={pageSize}
            total={
              store.listOfProducts.filter(
                (p) => p.productCategory === productCategory
              ).length
            }
            onChange={onPaginationChange}
            showSizeChanger={false}
            style={{
              marginTop: "1rem",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
