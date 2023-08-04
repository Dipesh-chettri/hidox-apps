import "../component/Table.css";
function Table(props) {
  const {data,drugDetailHandler,desData}=props;
  return (
    <div className="table-container">
      <div className="row">
        <h3>Drug Data</h3>
        <div className="Drug-list-container">
          <ul>
            {data && data.map((item, index) => {
                return (
                  <li
                  key={item.id}
                    style={{ textTransform: "capitalize !important" }}
                    onClick={(e) =>drugDetailHandler(e, item.id)}
                    className={props.active === item.id ? "active":""}
                  >
                    {item.drugName}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="row">
        {" "}
        <h4>Drug Details</h4>
        <div className="Drug-list-container">
          <ul>
            {desData &&
              desData?.map((item) => {
                return (
                  <div key={item.id}>
                    <h3 className="blue-title">{item.drugName}</h3>
                    <li>{item.drugDetails}</li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Table;
