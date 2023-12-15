import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <header className="header"> 
      <ContentWrapper>
        <div className="logo">
        <img src="src/assets/logo2-removebg.png" alt="Logo Image"/>
        </div>
        <ul className="menuItems">
          <li onClick={() => {}} className="menuLitem">Movies</li>
          <li className="menuLitem">TV shows</li>
          <li className="menuLitem">
            <HiOutlineSearch/>
          </li>
        </ul>
        <div className="mobileMenuItems">
        <HiOutlineSearch/>
        {mobileMenu? <SlMenu/> : <VscChromeClose/>}
        
        
        </div>
      </ContentWrapper>
    </header>
  )
}

export default Header