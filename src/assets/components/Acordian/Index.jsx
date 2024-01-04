import React, { useState } from "react";
import "./indexx.css";
import data from "./data";
const Index = () => {
  //  const data1=data.json();
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleclick = (handleData) => {
    setSelected(handleData === selected ? null : handleData);
  };

  const handleMulticlick = (handleData) => {
    let cpymulti = [...multiple];
    const findIndexOfCurrentId = cpymulti.indexOf(handleData);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpymulti.push(handleData);
    else cpymulti.splice(findIndexOfCurrentId, 1);

    setMultiple(cpymulti);
  };
  console.log(selected, multiple);
  return (
    <>
      <div className="container">
        <div className="i-container">
          <div
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            className={enableMultiSelection?"multi_hover": "multi"}
          >
            <p>Enable Multi Selection</p>
          </div>
          {data && data.length > 0 ? (
            data.map((dataItem) => {
              return (
                <div className="items" key={dataItem.id}>
                  <div
                    onClick={() =>
                      enableMultiSelection
                        ? handleMulticlick(dataItem.id)
                        : handleSingleclick(dataItem.id)
                    }
                    className="title"
                  >
                    <h1>{dataItem.question}</h1>
                    <p className="plus">+</p>
                  </div>
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <p className="answer">{dataItem.answer}</p>
                      )
                    : selected === dataItem.id && (
                        <p className="answer">{dataItem.answer}</p>
                      )}
                </div>
              );
            })
          ) : (
            <div>no data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
