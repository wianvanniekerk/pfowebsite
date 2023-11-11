import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillHome,
  AiOutlineQuestionCircle,
  AiFillAndroid,
} from "react-icons/ai";
// import { SocialIcons } from "./NavbarStyles.js";

function Navbar() {
  return (
    <div class="navbar">
      <a href="#Hero">
        <AiFillHome size="2rem" />
        Home
      </a>
      <a href="#Hero">
        <AiOutlineQuestionCircle size="2rem" />
        About us
      </a>
      <a href="#Hero">
        <AiFillAndroid size="2rem" />
        Services
      </a>
      <span class="moveIcon">
        <a href="#Hero">
          <AiOutlinePhone size="2rem" />
        </a>
        <a href="#Hero">
          <AiOutlineMail size="2rem" />
        </a>
      </span>
    </div>
  );
}
export default Navbar;
