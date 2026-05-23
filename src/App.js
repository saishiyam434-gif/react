import React from 'react';
import themeing from './e-learmimg.jpg'; 

function App() {
  const message = 'Hello, JSX!';
  const paragraph = 'hello, this is a paragraph rendered using JSX.';

  const PI = 3.14159;
  const description = `The value of PI is approximately ${PI}.`;
  const theme=<img src={`${themeing}`} alt="themeing" />
  
  const welcome =(props) => {
    return <div>Welcome, {props.name}!</div>;
  }
  
  return (
    <div>
     {theme}
     <welcome>
      <h1>{message}</h1>
      <p>{paragraph}</p>
      <p>{description}</p>
      </welcome>
      {theme}
   </div>
  
  );
}

export default App;