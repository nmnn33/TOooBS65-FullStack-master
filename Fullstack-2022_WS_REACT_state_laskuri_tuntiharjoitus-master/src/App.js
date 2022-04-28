import React, { useState, useEffect } from 'react'
import './App.css';
import styled from 'styled-components';

const Button = ({ onClick, text }) => {
  return (<button onClick={onClick}>{text}</button>)
}

const ButtonGroup = styled.div`
  display: flex;
  text-align: center;
`

const Display = ({ counter }) => <div>{counter}</div>

function App() {

  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Clicks ${counter}`;
  });

  return (


    <div className='App'>
      <Display counter={counter} />
      <button onClick={increaseByOne}>HTMLButton</button>
      <ButtonGroup>
        <Button onClick={increaseByOne} text='Lisää' />
        <Button onClick={setToZero} text='Nollaa' />
        <Button onClick={decreaseByOne} text='Vähennä' />
      </ButtonGroup>

    </div>
  );
}

export default App;
