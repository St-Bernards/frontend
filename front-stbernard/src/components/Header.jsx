import React from "react";
import logo from "../images/bernardlogo.svg";
import { HeaderTitle, HeaderButton } from "./Component_bank";

export default function Header() {
  return (
    <div className="h-[100px] flex flex-row items-center justify-between px-10 max-w-[1512px] z-50">
      <image src={logo} className="z-50" />
      <div className="flex flex-row items-center gap-10">
        <HeaderTitle message="Home" />
        <HeaderButton message="Connect Wallet" />
      </div>
    </div>
  );
}
