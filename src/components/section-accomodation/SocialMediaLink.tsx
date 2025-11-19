import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

import type { SocialMediaLinkProps } from "../../models/ApartmentSectionProps";

const SocialMediaLink = ({ facebookLink, instagramLink }: SocialMediaLinkProps) => {
  if (facebookLink === undefined || instagramLink === undefined) {
    return (
      <a href={instagramLink}>
        <InstagramOutlined
          style={{
            cursor: "pointer",
            fontSize: 24,
            color: "blue",
          }}
        />
      </a>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", columnGap: "1rem" }}>
      <a href={facebookLink}>
        <FacebookOutlined
          style={{
            cursor: "pointer",
            fontSize: 24,
            color: "blue",
          }}
        />
      </a>
      <a href={instagramLink}>
        <InstagramOutlined
          style={{
            cursor: "pointer",
            fontSize: 24,
            color: "blue",
          }}
        />
      </a>
    </div>
  );
};

export default SocialMediaLink;
