import React, { useState } from "react";

function ChecklistWeekly() {

    const [checked, setChecked] = useState([]);
    const checkList = [
        "World Boss", 
        "Boss Rush",
        "Ghost Ship",
        "Chaos Gate",
        "Abyss Dungeon",
        "Legion Raid",
    ];

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
    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
    : "";

    // Return classes based on whether item is checked
    var isChecked = (item) =>
        checked.includes(item) ? "checked" : "not-checked-item";

        return (
            <div className="app-weekly">
              <div className="checkList">
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
                {/* <div className='fin-tasks'>Finished Tasks</div> */}
                <hr />
                  {`${checkedItems}`}
              </div>
            </div>
          );
        }
        

export default ChecklistWeekly
