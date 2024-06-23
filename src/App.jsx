import "./App.css";
import react, {useState} from 'react';

function App() {
  const [count, setCount]=useState(0);
  
  function decreaseHandler(){
    setCount(count-1);
  }
  
  function increaseHandler(){
    setCount(count+1);
  }
  
  function resetHandler(){
    setCount(0);
  }
  
  
  
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-blue-300 flex-col gap-10">
          <div className="text-2xl font-medium">Increment and Decrement</div>
          <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px]">
                
                <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-black">-</button>
                <div className="font-bold gap-12 text-5xl">{count}</div>
                <button onClick={increaseHandler}  className="border-l-2 text-center w-20 border-black">+</button>
          </div>
          <button onClick={resetHandler} className="bg-white px-5 py-2 rounded-md text-lg">Reset</button>
    
    </div>
  );
}

export default App;
