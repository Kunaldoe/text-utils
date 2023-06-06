import React, { useState } from 'react';
import './About.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <br />
      

      <Accordion
        title="Reviews from customers"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam mauris. Sed a massa euismod, tincidunt purus et, sagittis elit. Integer tincidunt laoreet mi, a luctus nisl pharetra eu."
      />
    
      <Accordion
        title="Location"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam mauris. Sed a massa euismod, tincidunt purus et, sagittis elit. Integer tincidunt laoreet mi, a luctus nisl pharetra eu."
      />
      <Accordion
        title="What we are"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam mauris. Sed a massa euismod, tincidunt purus et, sagittis elit. Integer tincidunt laoreet mi, a luctus nisl pharetra eu."
      />
    </div>
  );
};

export default App;
