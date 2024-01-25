import React, { useState } from 'react';
import StudentForm from './student';
import SalariedForm from './salary';
import BusinessForm from './business';

const Select = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Dynamic Data Collection</h2>

      <label htmlFor="selectOption">Select an option:</label>
      <select id="selectOption" value={selectedOption} onChange={handleDropdownChange}>
      <option value="select">Select</option>
        <option value="student">Student</option>
        <option value="salaried">Salaried</option>
        <option value="business">Business</option>
      </select>

      {selectedOption === 'student' && <StudentForm />}
      {selectedOption === 'salaried' && <SalariedForm />}
      {selectedOption === 'business' && <BusinessForm />}
    </div>
  );
};

export default Select;
