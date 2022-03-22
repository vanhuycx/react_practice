import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { useGetCryptoQuery } from "./api/cryptoApi";
import "./App.scss";

const App = () => {
  const array1 = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>
        Hello{" "}
        {array1.map((number) => {
          return console.log(number);
        })}
      </h1>

      <div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default App;
