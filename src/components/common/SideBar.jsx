import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
// Components

// path match

const SideBar = (props) => {
  let path = useLocation().pathname;

  // Card Operation Path
  let cardOperationPath = matchPath("/card-operation/*", path);
  if (cardOperationPath) {
    cardOperationPath = cardOperationPath.pathnameBase;
  }

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    }
    if (arr === cardOperationPath) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    }
    if (arr === cardOperationPath) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    }
    if (arr === cardOperationPath) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/*Dashboard*/}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span className="sidebarIconSize icon-Dashboard"></span>
              <span className="fontSize14 ms-2">Dashboard</span>
            </button>
          </h2>
        </div>

        {/* Configuration */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <Link
              to="/cms-configuration"
              className={activeLink("/cms-configuration")}
            >
              <button className="accordion-button collapsed" type="button">
                <span className="sidebarIconSize icon-Configuration"></span>
                <span className="fontSize14 ms-2">Configuration</span>
              </button>
            </Link>
          </h2>
        </div>

        {/* manual-insert */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <Link to="/manual-insert" className={activeLink("/manual-insert")}>
              <button className="accordion-button collapsed" type="button">
                <span className="sidebarIconSize icon-Manual-Insert"></span>
                <span className="fontSize14 ms-2">Manual Insert</span>
              </button>
            </Link>
          </h2>
        </div>

        {/* Card Operation */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={activeBtnClass("/card-operation")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded={activeAriaExpand("/card-operation")}
              aria-controls="collapseTwo"
            >
              <span className=" sidebarIconSize icon-Operartion-Card">
                {/* DMT ICon */}
              </span>
              <span className="fontSize14 ms-2">Card Operation</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={activeAccordionBodyClass("/card-operation")}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Generate Cards</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Encoding Emboss</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Pin Print</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Activation Process</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/card-operation/active-card"
                    className={activeLink("/card-operation/active-card")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Active Cards</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">De-Active Cards</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Hot Cards</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Credit Card Repin Request
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Change Card Limit</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Insta Card Operation */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingBBPS">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBBPS"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseBBPS"
            >
              <span className="sidebarIconSize icon-Insta-Card">
                {/* BBPS Icon */}
              </span>
              <span className="fontSize14 ms-2">Insta Card Operation</span>
            </button>
          </h2>
          <div
            id="collapseBBPS"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingBBPS"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Generate Insta Cards</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      VEncoding Embossing Insta Cards
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Pin Print</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Account Mapping</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Inventory Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAdminManagement">
            <button
              className={activeBtnClass("/dummyInventory-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAdminManagement"
              aria-expanded={activeAriaExpand("/dummyInventory-text")}
              aria-controls="collapseAdminManagement"
            >
              <span className="sidebarIconSize icon-Inventory">
                {/* Inventory Management Icon */}
              </span>
              <span className="fontSize14 ms-2">Inventory Management</span>
            </button>
          </h2>
          <div
            id="collapseAdminManagement"
            className={activeAccordionBodyClass("/dummyInventory-text")}
            aria-labelledby="headingAdminManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/" className={activeLink("/dummyInventory-text")}>
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Courier-Card Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className={activeLink("/dummyInventory-text")}>
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Courier-Card Branch Details
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className={activeLink("/dummyInventory-text")}>
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Courier-Vendor Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className={activeLink("/dummyInventory-text")}>
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Reports</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Reports*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSettlementManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSettlementManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseSettlementManagement"
            >
              <span className="sidebarIconSize icon-Reports">
                {/* Wallet Icon */}
              </span>
              <span className="fontSize14 ms-2">Reports</span>
            </button>
          </h2>
          <div
            id="collapseSettlementManagement"
            className={activeAccordionBodyClass("/dummyDownload-text")}
            aria-labelledby="headingSettlementManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Audit Reports</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">CMS Summary Reports</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Monthly Card Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
