import React, { Component } from "react";

import styles from "./App.less";
import { Button } from "antd";
import Hello from "./Hello";
import One from 'Comp/One'
export default class App extends Component {
  /*  constructor(...props) {
    super(...props);
  } */
  componentDidMount() {
    let obj = {
      token: "",
      optimus_uuid:
        "2E573EC0F1AC11EAA2C8834A27C8F822D1291853EF204DA7AA095C513442E9FF",
      optimus_risk_level: 71,
      b: 1,
      optimus_code: 10,
    };

    let str = "";
    Object.keys(obj)
      .filter((item) => item !== "b")
      .forEach((item) => {
        str += item + "=" + obj[item] + "&";
      });
    str += str.slice(0, -1);

    fetch("/ajax/movieOnInfoList?" + str)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  render() {
    return (
      <div>
        <div className="box"></div>
        <div className={styles.box1}></div>
        <Hello></Hello>
        <One></One>
        <Button type="primary">11</Button>
      </div>
    );
  }
}
