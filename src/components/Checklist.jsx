import React, { useState } from "react";

function Checklist() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Daily", 
      "Chaos Dungeon", 
      "Guardian",
      "Adventure Island",        
      "World Boss", 
      "Chaos Gate",
    ];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  // const checkedItems = checked.length
  //   ? checked.reduce((total, item) => {
  //       return total + ", " + item;
  //     })
  //   : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="daily-app-wrapper">
      <div className="checkList">
        <div className="title">Daily Checklist</div>
        <hr />
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}> &nbsp;{item}</span>
            </div>
          ))}
        </div>
      </div>
    <br></br>
      <div>
        {/* <div className='finished-tasks'>Finished Dailies</div>
        <hr />
          {`${checkedItems}`} */}
      </div>
    </div>
  );
}

export default Checklist