import { useState } from 'react';
import './App.css'

function App() {
  const [choice, setchoice]=useState("");
  function calculate(inputs)
  {
    setchoice(choice+inputs);
    console.log();
  }
  function answer()
  {
    try
    {
      const ans=eval(choice);
      if(ans=="Infinity")
      {
        setchoice("Error");
        return;
      }
      setchoice(ans);
    }
    catch(error)
    {
      setchoice("Error");
    }
  }
  function clear()
  {
    setchoice("");
  }
  
  return (
    <>
    <h1>
        Caclulator Using react
      </h1>
    <div className='calc'>
      
      <input type="text" id='inputtxts' value={choice} readOnly/>
      <div className='buttons'>
        <button onClick={()=>calculate('+')} className='keys'>+</button>
        <button onClick={()=>calculate('7')}>7</button>
        <button onClick={()=>calculate('8')}>8</button>
        <button onClick={()=>calculate('9')}>9</button>
        <button className='keys' onClick={()=>calculate('-')}>-</button>
        <button onClick={()=>calculate('4')}>4</button>
        <button onClick={()=>calculate('5')}>5</button>
        <button onClick={()=>calculate('6')}>6</button>
        <button className='keys' onClick={()=>calculate('*')}>*</button>
        <button onClick={()=>calculate('1')}>1</button>
        <button onClick={()=>calculate('2')}>2</button>
        <button onClick={()=>calculate('3')}>3</button>
        <button className='keys' onClick={()=>calculate('/')}>/</button>
        <button onClick={()=>calculate('0')}>0</button>
        <button onClick={()=>calculate('.')}>.</button>
        <button onClick={()=>answer()}>=</button>
        <button className='keys' onClick={clear}>C</button>
      </div>
    </div>
    </>
  )
}

export default App
