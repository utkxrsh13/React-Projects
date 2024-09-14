import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  // const [disable, setDisable] = useState(false);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSelection(getData) {
    setSelected(getData===selected?null:getData);
  }
  function handleMultiSelection(getData){
    let copy = [...multiSelect];
    let firstIndex = copy.indexOf(getData);
    if(firstIndex === -1) copy.push(getData)
    else copy.splice(firstIndex,1);

    setMultiSelect(copy)
    
  }
  // console.log(selected);
  console.log(selected, multiSelect);


  return (
    <div className="flex flex-col bg-blue-400 justify-center h-[100vh] items-center w-[100vw]">
      <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)} className="p-3 bg-black rounded-md font-semibold cursor-pointer hover:bg-pink-500 hover:text-black">{!enableMultiSelection?"Enable Multi Selection":"Disable Multi Selection"}</button>
      <div className="w-[500px] flex justify-center flex-col">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className=" bg-pink-500 m-[10px] p-4">
              <div
                className="text-center flex justify-between items-center cursor-pointer"
                onClick={enableMultiSelection? 
                  ()=>handleMultiSelection(dataItem.id):
                  () => handleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>{
                enableMultiSelection?
                multiSelect.indexOf(dataItem.id) !== -1 && (
                  <div  className="h-auto">{dataItem.answer}</div>
                ): selected === dataItem.id && <div  className="h-auto">{dataItem.answer}</div>
              }
              {/* {selected === dataItem.id ? <div  className="h-auto">{dataItem.answer}</div> : null} */}
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
