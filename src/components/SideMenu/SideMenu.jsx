import React from "react";
import "./SideMenu.css";
import {ReactComponent as CpuIcon} from "svg/cpu.svg";
import {ReactComponent as LaptopIcon} from "svg/laptop.svg";
import {ReactComponent as KeyboardIcon} from "svg/keyboard.svg";
import {ReactComponent as MenuArrowRightIcon} from "svg/menu-arrow-right.svg";
import {ReactComponent as SaleIcon} from "svg/sale.svg";
import {ReactComponent as DeliveryIcon} from "svg/delivery.svg";
import {ReactComponent as CubeIcon} from "svg/cube.svg";
import {ReactComponent as DocumentIcon} from "svg/document.svg";

import SideMenuFooter from "components/SideMenuFooter/SideMenuFooter";
import SideMenuItem from "components/SideMenuItem/SideMenuItem";
import {Link} from "react-router-dom";

const SideMenu = () => {

  const catalogItems = [
    {icon: LaptopIcon, name: "Ноутбуки и компьютеры", filter: "computer"},
    {icon: KeyboardIcon, name: "Компьютерная периферия", filter: "peripheral"},
    {icon: CpuIcon, name: "Компьютерные комплектующие", filter: "component"}
  ];

  const infoForClientItems = [
    {icon: SaleIcon, name: "Акции"},
    {icon: DeliveryIcon, name: "Доставка"},
    {icon: CubeIcon, name: "О компании"},
    {icon: DocumentIcon, name: "Документы", smallIcon: true}
  ];

  return (
    <div id={"side-menu"} className={"side-menu"}>
      <div className="side-menu-catalog">
        {catalogItems.map(({icon, name, filter}) =>
          <Link
            to={`/catalog?filter=${filter}`}
            className="side-menu-catalog-item"
            key={name}
          >
            <SideMenuItem
              key={name}
              SvgIcon={icon}
              displayName={name}
            />
          </Link>
        )}
      </div>
      <div className="side-menu-bottom">
        <div className="side-menu-catalog side-menu-catalog-for-clients">
          {infoForClientItems.map(({icon, name, smallIcon}) =>
            <SideMenuItem
              key={name}
              SvgIcon={icon}
              displayName={name}
              smallIcon={smallIcon}
              smallItem={true}
            />)}
        </div>
        <SideMenuFooter/>
      </div>
    </div>
  );
};

export default SideMenu;