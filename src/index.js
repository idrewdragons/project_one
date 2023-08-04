import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pics } from "./pics";
import Loki from './Loki';

const PicList = () => {
  return (
    <>
    <h1>Day in the Life Of Loki</h1>
      <section className="piclist">
        {pics.map((loki, index) => {
          return <Loki {...loki} key={loki.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PicList />);
