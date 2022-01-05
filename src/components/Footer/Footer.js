import React from "react";
import "../../css/Footer/Footer.css";
import {words} from '../../StaticFile';
function Footer() {
  return( 
      <footer>
        {words.footerTitle}
      </footer>
      );
}

export default Footer;