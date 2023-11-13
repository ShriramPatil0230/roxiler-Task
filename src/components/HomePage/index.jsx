import { useState, useEffect, startTransition } from "react";
import Table from "../Table/index.jsx";  
import "./style.css";

import Statistics from "../Statistics/index.jsx"
import Barchart from "../BarChart/index.jsx";
import axios from "axios";

const Homepage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("03");
  const [data, setdata] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(
        `https://roxiler-transactions.onrender.com/gettransactions/${month}`
      );
      setdata(response.data.data)
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, [month]);

  const noData = [
    {
      id: "No Data",
      title: "No Data",
      description: "No Data",
      price: "No Data",
      category: "No Data",
      image: "No Data",
      sold: "No Data",
      dateOfSale: "No Data",
    },
  ];

  let filteredData = data.filter((item) => {
    return (
      item.productDescription.toLowerCase().includes(search.toLowerCase()) ||
      item.productTitle.toLowerCase().includes(search.toLowerCase()) ||
      item.productCategory.toLowerCase().includes(search.toLowerCase()) ||
      item.productPrice.toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="home">
      <div id="top" className="top">
        <h2>Transaction Dashboard</h2>
      </div>
      <div className="center">
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search Transaction"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="dropdown-item">
          <select
            name="dropdown-item"
            id="dropdown-item"
            onChange={(e) => {
              setMonth(e.target.value);
            }}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03" selected>
              March
            </option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <div className="bottom">
        <Table data={filteredData} />
      </div>
      <div className="table-footer">
        <div className="left">
          {" "}
          <b>Page No: {pageNumber}</b>
        </div>
        <div className="center">
          <button disabled={data.length > 10 ? false : true}>
            Previous
          </button>
          <button disabled={data.length > 10 ? false : true}>Next</button>
        </div>
        <div className="right">
          <b>Per Page: 10</b>
        </div>

      </div>
    
      <>
        <Statistics month={month} data={filteredData} />
      </>
      <>
        <Barchart  month={month} data={filteredData} />
      </> 
    </div>
  );
};

export default Homepage;
