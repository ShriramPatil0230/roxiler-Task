import "./style.css";
const Table = ({data}) => {
  return (
    <>
      <table className="table">
        <thead className="table-header">
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sold</th>
          <th>Image</th>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((row, i) => (
              <tr key={i}>
                <td>{row.productId}</td>
                <td>{row.productTitle}</td>
                <td className="table-desc">{row.productDescription}</td>
                <td>
                  <b>${row.productPrice.toFixed(2)}</b>
                </td>
                <td>{row.productCategory.toUpperCase()}</td>
                <td>{row.productSold === true ? "YES" : "NO"}</td>
                <td className="table-image">
                  <img src={row.productImage} alt="product" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data available</td>
              <td>No Data available</td>
              <td>No Data available</td>
              <td>No Data available</td>
              <td>No Data available</td>
              <td>No Data available</td>
              <td>No Data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table