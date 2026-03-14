'use client'

import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import MobileNavSidebar from "./MobileNavSidebar";

export default function MenuFunctionIcons(props) {
  const type = props.type || "";
  const color = props.color || "orange";
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <ul className={`menu_icons ml-auto ${type ? type : ''}`}>
        <li className={`menu_icons_item inline-block align-middle${type.includes('style-one') ? ' absolute left-[16px] ' : ' ml-5 '}lg:hidden`}>
          <button
            className="menu_icons_btn"
            onClick={(e) => {
              e.preventDefault();
              setShowMobileNav(!showMobileNav);
            }}
          >
            <Icon.List className={`text-2xl ${type.includes('style-two') || type.includes('style-four') ? 'text-white' : ''}`} />
            <span className="blind">button menu mobile</span>
          </button>
        </li>
      </ul>

      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        type={type}
        color={color}
      />
    </>
  );
}