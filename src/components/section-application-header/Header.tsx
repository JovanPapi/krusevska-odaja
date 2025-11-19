import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Grid, Menu } from "antd";
import type { ItemType, MenuItemType } from "antd/es/menu/interface";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import logoOdaja from "../../resources/logo-odaja.png";
import { useLanguageSwitcherSelector } from "../../store/LanguageSwitcher";
import "./Header.css";

const { useBreakpoint } = Grid;

const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  const intl = useIntl();

  const { handleChangeLanguage, currentLanguage } = useLanguageSwitcherSelector();

  const menuItems: ItemType<MenuItemType>[] = [
    {
      key: "home",
      label: (
        <a href="#photo-slider" style={{ color: "rgba(206, 212, 212, 1)" }}>
          {intl.formatMessage({
            id: "section.home.menu.home",
            defaultMessage: "Home",
          })}
        </a>
      ),
    },
    {
      key: "for-us",
      label: (
        <a href="#for-us" style={{ color: "rgba(206, 212, 212, 1)" }}>
          {intl.formatMessage({
            id: "section.home.menu.forUs",
            defaultMessage: "For us",
          })}
        </a>
      ),
    },
    {
      key: "specialities",
      label: (
        <a href="#our-specialities" style={{ color: "rgba(206, 212, 212, 1)" }}>
          {intl.formatMessage({
            id: "section.home.menu.specialities",
            defaultMessage: "Specialities",
          })}
        </a>
      ),
    },
    {
      key: "menu",
      label: (
        <a href="#menu" style={{ color: "rgba(206, 212, 212, 1)" }}>
          {intl.formatMessage({
            id: "section.home.menu.menu",
            defaultMessage: "Menu",
          })}
        </a>
      ),
    },
    {
      key: "apartments",
      label: (
        <a href="#apartments" style={{ color: "rgba(206, 212, 212, 1)" }}>
          {intl.formatMessage({
            id: "section.home.menu.accommodation",
            defaultMessage: "Accommodation",
          })}
        </a>
      ),
    },
    {
      key: "krusevo",
      label: (
        <a href="#for-krusevo" style={{ color: "rgba(206, 212, 212, 1)" }}>
          {intl.formatMessage({
            id: "section.home.menu.krusevo",
            defaultMessage: "Krusevo",
          })}
        </a>
      ),
    },
    {
      key: "contact",
      label: (
        <a href="#contact-information" style={{ color: "rgba(206, 212, 212, 1)" }}>
          {intl.formatMessage({
            id: "section.home.menu.contact",
            defaultMessage: "Contact",
          })}
        </a>
      ),
    },
  ];

  const handleSwitchLanguage = (event: React.MouseEvent<HTMLButtonElement>, value: "en" | "mk") => {
    event.preventDefault();

    handleChangeLanguage(value);
  };

  return (
    <div id="home" className="header-wrapper">
      <div
        style={{
          display: "flex",
          width: "100%",
        }}>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <h2 style={{ color: "white" }}>
            {intl.formatMessage({
              id: "section.home.title",
              defaultMessage: "Krusevska Odaja",
            })}
          </h2>
          <img alt="Restaurant-logo" src={logoOdaja} width={70} height={70} />
        </div>

        <div style={{ display: "flex" }}>
          <button
            className={`header-lang-button left ${currentLanguage !== "en" ? "header-lang-button-disabled" : ""}`}
            onClick={(event) => handleSwitchLanguage(event, "en")}>
            en
          </button>
          <button
            className={`header-lang-button right ${currentLanguage !== "mk" ? "header-lang-button-disabled" : ""}`}
            onClick={(event) => handleSwitchLanguage(event, "mk")}>
            mk
          </button>
        </div>
      </div>

      {screens.md === true ? (
        <Menu theme="dark" mode="horizontal" items={menuItems} style={{ width: "100%", justifyContent: "center" }} />
      ) : (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: "1.5rem", color: "white" }} />}
            onClick={() => setDrawerVisible(true)}
          />
          <Drawer title="Krusevska odaja" placement="top" onClose={() => setDrawerVisible(false)} open={drawerVisible}>
            <Menu
              mode="vertical"
              items={menuItems}
              onClick={() => setDrawerVisible(false)} // close drawer after click
            />
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Header;
