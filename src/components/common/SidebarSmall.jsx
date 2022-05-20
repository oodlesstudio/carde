import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

// const activeLink = (arr) => {};

const operationCardPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/transfer-money">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Generate Cards</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Encoding Emboss</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Pin Print</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Activation Process</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Active Cards</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">De-Active Cards</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Hot Cards</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Credit Card Repin Request</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Change Card Limit</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const instaCardPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Generate Insta Cards</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Encoding Embossing Insta Cards</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Pin Print </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Account Mapping</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const inventoryPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Courier-Card Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Courier-Card Branch Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Courier-Vendor Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Reports</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const reportPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Audit Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">CMS Summary Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Monthly Card Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  return (
    <div className="sidebarSmall">
      {/* Dashboard  */}
      <div className="sidebarSmallImg">
        <Link to="/">
          <span className="sidebarIconSize icon-Dashboard">
            {/* Dashboard  Small Icon */}
          </span>
        </Link>
      </div>

      {/* Configuration  */}
      <div className="sidebarSmallImg">
        <Link to="/" className={activeLink("/")}>
          <span className="sidebarIconSize icon-Configuration">
            {/* icon-Configuration  Small Icon */}
          </span>
        </Link>
      </div>

      {/* Manual Insert  */}
      <div className="sidebarSmallImg">
        <Link to="/" className={activeLink("/manual-insert")}>
          <span className="sidebarIconSize icon-Manual-Insert">
            {/* icon-Manual-Insert  Small Icon */}
          </span>
        </Link>
      </div>

      {/* operation Card */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={operationCardPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Operartion-Card">
            {/* icon-Operartion-Card Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* icon-Insta */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={instaCardPopover}
          rootClose
        >
          <span className=" sidebarIconSize icon-Insta-Card">
            {/*  icon-Insta-Card Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Inventory */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={inventoryPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Inventory">
            {/* icon-Inventory Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={reportPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Reports">
            {/* icon-Reports Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
