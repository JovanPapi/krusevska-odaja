import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useIntl } from "react-intl";

import type { Product } from "../../models/Product";
import { useLanguageSwitcherSelector } from "../../store/LanguageSwitcher";
import "./RestaurantMenu.css";

interface MenuProductsProps {
  product: Product;
  productImage: string;
}
const MenuProductItem = ({ product, productImage }: MenuProductsProps) => {
  const intl = useIntl();
  const { currentLanguage } = useLanguageSwitcherSelector();

  return (
    <Card
      key={product.name}
      hoverable={false}
      cover={<img alt={productImage} src={productImage} className="menu-card-image" />}
      actions={[
        <span>{product.description === "" ? "/" : product.description}</span>,
        <span>{`${product.price} ${intl.formatMessage({
          id: "section.menuProductItem.valuta",
          defaultMessage: "Denari",
        })}`}</span>,
      ]}
      styles={{
        body: { padding: "24px 5px 24px 5px" },
      }}>
      <Meta title={currentLanguage === "en" ? product.name : product.nameTranslated} />
    </Card>
  );
};

export default MenuProductItem;
