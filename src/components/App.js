import React from 'react';
import Bill from "./Bill"
import '../index.css'

const App = () => {

    return (
      <div className="App">
        <div className="header">
          <h1>Restaurant Bill Calculator</h1>
        </div>
        <Bill />
      </div>
    );
}

export default App;
