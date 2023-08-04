import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Button from "./component/Button";
import Table from "./component/Table";
import Explore from "./component/Explore";
import Footer from "./component/Footer";

function App(props) {
  const [data, setData] = useState([]);
  const [desData, setDesData] = useState([]);
  const [active, seActive] = useState(1);
  
  useEffect(() => {
    fetch("http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList", {
      method: "POST",
      drugData: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res?.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        const resData = data.data;
        setData(resData);
        setDesData([data?.data?.drugData[0]]);
      })
      .catch((err) => console.error(err));
  }, []);

  const drugDetailHandler = (e, item) => {
    const filteredData = data?.drugData?.filter((itm) => {
      if (item === itm.id) {
        return itm;
      }
    });
    seActive(item);
    setDesData(filteredData);
  };
  return (
    <div className="App">
      <Header />
      <Search />
      <Button />
      <Table drugDetailHandler={drugDetailHandler} desData={desData} active={active} data={data.drugData} />
      <Explore data={data?.exploreMore}/>  
      <Footer />
    </div>
  );
}

export default App;
