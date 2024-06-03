import React from "react";

function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        ⓒ {year} {props.footer}
      </p>
    </footer>
  );
}

export default Footer;
