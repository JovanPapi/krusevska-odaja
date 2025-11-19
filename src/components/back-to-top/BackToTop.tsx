import { UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <>
      {visible && (
        <Button
          type="primary"
          shape="circle"
          icon={<UpOutlined />}
          size="large"
          style={{
            position: "fixed",
            bottom: 50,
            right: 50,
            zIndex: 1000,
          }}
          onClick={scrollToTop}
        />
      )}
    </>
  );
};

export default BackToTop;
