import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSelection(getData) {
    setSelected(getData===selected?null:getData);
  }
  console.log(selected);

  return (
    <div className="flex flex-col bg-blue-400 justify-center h-[100vh] items-center w-[100vw]">
      <button className="p-3 bg-black rounded-md font-semibold cursor-pointer hover:bg-pink-500 hover:text-black">Enable Multi Selection</button>
      <div className="w-[500px] flex justify-center flex-col">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className=" bg-pink-500 m-[10px] p-4">
              <div
                className="text-center flex justify-between items-center cursor-pointer"
                onClick={() => handleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? <div  className="h-auto">{dataItem.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
