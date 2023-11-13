import "./style.css";
const Barchart = ({ month, data }) => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].price < 100) {
      count1++;
    } else if (data[i].productPrice < 200) {
      count2++;
    } else if (data[i].productPrice < 300) {
      count3++;
    } else if (data[i].productPrice < 400) {
      count4++;
    } else if (data[i].productPrice < 500) {
      count5++;
    } else if (data[i].productPrice < 600) {
      count6++;
    } else {
      count7++;
    }
  }
  const chartHeights = {
    1: "17px",
    2: "35px",
    3: "53px",
    4: "70px",
    5: "88px",
    6: "105px",
    7: "123px",
    8: "140px",
  };

  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return (
    <div className="barchart">
      <h2>
        <u> Bar Chart Stats - {months[month]}</u>
      </h2>
      <div className="axis">
        <p>X-axis = Price</p>
        <p>Y-axis = Item count</p>
      </div>
      <div className="items">
        <div className="0">0</div>
        <div className="2">2</div>
        <div className="4">4</div>
        <div className="6">6</div>
        <div className="8">8</div>
        <div className="10">10</div>
        <div className="12">12</div>
      </div>
      <div className="price">
        <div className="100">$0-100</div>
        <div className="200">$100-200</div>
        <div className="300">$200-300</div>
        <div className="400">$300-400</div>
        <div className="500">$400-500</div>
        <div className="600">$500-600</div>
        <div className="700">$above 600</div>
      </div>
      <div className="chart">
        <div
          className="100 chart-item"
          style={{ height: chartHeights[count1] }}></div>
        <div
          className="200 chart-item"
          style={{ height: chartHeights[count2] }}></div>
        <div
          className="300 chart-item"
          style={{ height: chartHeights[count3] }}></div>
        <div
          className="400 chart-item"
          style={{ height: chartHeights[count4] }}></div>
        <div
          className="500 chart-item"
          style={{ height: chartHeights[count5] }}></div>
        <div
          className="600 chart-item"
          style={{ height: chartHeights[count6] }}></div>
        <div
          className="700 chart-item"
          style={{ height: chartHeights[count7] }}></div>
      </div>
      <div className="hr-line">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Barchart;
