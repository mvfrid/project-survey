import React from 'react';

const Name = ({ name, setName, step }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="name-container">
      <div className="headings">
        <h2 aria-hidden="true">Question {step} / 5</h2>
        <h2 className="visually-hidden">Question {step} out of 5</h2>
        <hr />
      </div>
      <div className="question-container">
        <h4>What is your name?</h4>
        <label htmlFor="nameInput">
          <span className="visually-hidden">What is your name?</span>
          {/* <p>Current state: {name}</p> */}
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={handleNameChange} />
        </label>
      </div>
    </div>
  );
};

export default Name;
