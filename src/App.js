import React, { useState } from 'react';
import './App.css';

function App() {
  // Basic Variables
  const greeting = "Hello World";
  let counter = 0;
  
  // Array Example
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
  
  // Object Example
  const user = {
    name: 'John Doe',
    age: 25,
    isStudent: true
  };

  // State Examples
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // Function Example 1: Regular Function
  function addNumbers(a, b) {
    return a + b;
  }

  // Function Example 2: Arrow Function
  const multiplyNumbers = (a, b) => {
    return a * b;
  };

  // Event Handler Functions
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  // Array Methods Example
  const filteredFruits = fruits.filter(fruit => fruit.length > 5);

  return (
    <div className="App">
      <h1>{greeting}</h1>

      {/* Basic Variables and Functions Demo */}
      <div className="section">
        <h2>Basic Math Functions</h2>
        <p>Addition Example: 5 + 3 = {addNumbers(5, 3)}</p>
        <p>Multiplication Example: 4 × 6 = {multiplyNumbers(4, 6)}</p>
      </div>

      {/* Array Example */}
      <div className="section">
        <h2>Array Example</h2>
        <p>All Fruits: {fruits.join(', ')}</p>
        <p>Fruits with more than 5 letters: {filteredFruits.join(', ')}</p>
      </div>

      {/* Object Example */}
      <div className="section">
        <h2>Object Example</h2>
        <p>User Info:</p>
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Is Student: {user.isStudent ? 'Yes' : 'No'}</li>
        </ul>
      </div>

      {/* State and Events Example */}
      <div className="section">
        <h2>State and Events</h2>
        <button onClick={handleIncrement}>
          Click Count: {count}
        </button>
        <br />
        <input 
          type="text" 
          value={text} 
          onChange={handleTextChange}
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
        <button onClick={toggleMessage}>
          Toggle Message
        </button>
        {showMessage && <p>Hidden message revealed!</p>}
      </div>
    </div>
  );
}

export default App;
