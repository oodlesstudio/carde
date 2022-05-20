import React, { useState } from "react";
import Select from "react-select";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
// import Error from "../../images/common/error.svg";
// import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];
const options2 = [
  { value: "1", label: "option" },
  { value: "2", label: "option" },
  { value: "3", label: "option" },
  { value: "4", label: "option" },
];

const ActiveCardsWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Modals
  // const [resetFilters, setResetFilters] = useState(false);
  // const [saveFilters, setSaveFilters] = useState(false);
  const [referenceNo, setReferenceNo] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  // const [logType, setLogType] = useState(false);
  // const changeLogType = () => setLogType(true);

  const [productType, setProductType] = useState(false);
  const changeProductType = () => setProductType(true);

  const [binScheme, setBinScheme] = useState(false);
  const changeBinScheme = () => setBinScheme(true);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="configLeft unmatchedContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Active Cards
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
          </Link>
          <span>
            <svg
              width="8"
              height="auto"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Card Operation</p>
          </Link>
          <span>
            <svg
              width="8"
              height="auto"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12">Active Cards</p>
          </Link>
        </div>
      </div>

      {/* Config Left Top */}
      <div className="configLeftTop">
        <div class="accordion" id="unmatchedFilters">
          <div class="accordion-item">
            <div
              className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
              id="unmatchedFiltersHeading"
            >
              <h6 className="fontWeight-600 colorBlack">Search</h6>
              <button
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#unmatchedFiltersCollapse"
                aria-expanded="true"
                aria-controls="unmatchedFiltersCollapse"
              >
                <span class="icon-Hide"></span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  Show / Hide
                </span>
              </button>
            </div>
            <div
              id="unmatchedFiltersCollapse"
              class="accordion-collapse collapse show"
              aria-labelledby="unmatchedFiltersHeading"
              data-bs-parent="#unmatchedFilters"
            >
              <div class="accordion-body">
                <div className="hrGreyLine"></div>
                <div className="configSelectBoxTop row">
                  <div className="clientNameSelect col-1">
                    <label htmlFor="customerName">Customer Name</label>
                    <input
                      type="text"
                      name="customerName"
                      id="customerName"
                      className="inputTextBox"
                      placeholder="Enter Customer Name"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="clientName">Branch</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setClientName();
                        changeClientName();
                      }}
                      options={options2}
                      id="clientName"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {clientName && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="From Date">
                      From Date <span>*</span>
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>
                  <div className="clientNameSelect col-1">
                    <label htmlFor="ToDate">
                      To Date <span>*</span>
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="accountName">Account Number</label>
                    <input
                      type="text"
                      name="accountName"
                      id="accountName"
                      className="inputTextBox"
                      placeholder="Enter Account Number"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      className="inputTextBox"
                      placeholder="Enter Account Number"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="productType">Product Type</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setProductType();
                        changeProductType();
                      }}
                      options={options2}
                      id="productType"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {productType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      className="inputTextBox"
                      placeholder="Enter Account Number"
                    />
                  </div>
                  <div className="clientNameSelect col-1">
                    <label htmlFor="binScheme">BIN Scheme</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setBinScheme();
                        changeBinScheme();
                      }}
                      options={options}
                      id="binScheme"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {binScheme && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-center btnsBtm">
                  <button type="button" className="btnPrimaryOutline">
                    Clear
                  </button>
                  <button type="button" className="btnPrimary ms-2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom">
        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
                classNamePrefix="reactSelectBox"
                placeholder="10 Entries"
              />
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <span class="icon-Search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Pdf} alt="Pdf" />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipExcel}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
              <div className="activeCardBtns">
                <button className="activeCardBtn">Repin</button>
                <button className="activeCardBtn">Mark Hot</button>
                <button className="activeCardBtn">Deactivate</button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table table-striped table-hover table-borderless align-middle">
              <thead>
                <tr>
                  <th scope="col">
                    Channel
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Mode
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Terminal ID
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Date & Time
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Reference No.
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Card No.
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Account No.
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Txn Amount
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    EJ Status
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Switch Status
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Network Status
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    GL Status
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Txns Type
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Remark
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="paginationBox d-flex align-items-center justify-content-between my-12">
            <div className="paginationLeft fontSize12">
              Showing 1 to 10 of 49 entries
            </div>

            <div className="paginationRight">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link previousPagination"
                      to="/"
                      aria-label="Previous"
                    >
                      <span
                        class="icon-Dropdown-Arrow"
                        style={{ fontSize: "12px" }}
                      ></span>
                      <span>First</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      2
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link paginationBottom" to="/">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link nextPagination"
                      to="/"
                      aria-label="Next"
                    >
                      <span>Last</span>
                      <span
                        class="icon-Dropdown-Arrow-1"
                        style={{ fontSize: "12px" }}
                      ></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Save Filters */}
        {referenceNo && (
          <Modal
            show={referenceNo}
            onHide={() => setReferenceNo(!referenceNo)}
            centered
            className="defaultThemeModal saveFiltersModal unmatchedTableModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Transaction ID Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  EJ Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <em>No record(s) found...</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  SW Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SVCB0001</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>459115XXXXXX5716</td>
                      <td>203218001138</td>
                      <td>6100.00</td>
                      <td>00</td>
                      <td>N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  Network Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SVCB0001</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>459115XXXXXX5716</td>
                      <td>203218001138</td>
                      <td>6100.00</td>
                      <td>00</td>
                      <td>N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  GL Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span class="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <em>No record(s) found...</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ActiveCardsWindow;
