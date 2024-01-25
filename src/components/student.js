import React, { useState } from "react";
import TextBox from  "../student/textbox";
import Dropdown from "../student/dropdown";
import Date from "../student/date";

function Student() {
  const [addedField,selectAddField] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const addField = () => {
    selectAddField(true)
    setSelectedOption("");
  };



  return (
    <div>
      <h2>Student Form</h2>
      <button onClick={addField}>Add Field</button>

      {addedField ? 

      <select id="selectOption" value={selectedOption} onChange={handleDropdownChange}>
        <option value="select">Select </option>
        <option value="textbox">TextBox </option>
        <option value="dropdown">DropDown</option>
        <option value="date">Datepicker</option>
      </select> : <></>}

      {selectedOption === 'textbox' && <TextBox />}
      {selectedOption === 'date' && <Date />}
      {selectedOption === 'dropdown' && <Dropdown />}

      
      
    </div>
  );
}

export default Student;
