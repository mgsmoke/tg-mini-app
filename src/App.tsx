import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <>
        <button className = {selectedColor} onClick={() => {setText(''); setCount(0)}}>
          Тут будет ваш текст(нажмите для сброса): {text}
        </button>
        <p></p>
        <input 
        value={text} 
        onChange={(e) => { 
        const newText = e.target.value; 
        setText(newText); 
        setCount(newText.length);
  }} 
/>

<input 
  type="checkbox" 
  checked={isChecked} 
  onChange={(e) => { 
    const checked = e.target.checked;
    setIsChecked(checked); 
    if (checked) {
      setText('');
      setCount(0);
    }
  }} 
/>

<p> </p>

  
  <select value={selectedColor} onChange={(e) => {setSelectedColor(e.target.value)}}>
    <option value="red">Красный</option>
    <option value="blue">Синий</option>
    <option value="green">Зелёный</option>
  </select> 


<p>Длина текста: {count} </p>
  </>
)
}

export default App