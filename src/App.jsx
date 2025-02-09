import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [title, setTitle] = useState(["가", "나", "다"]);
  let [like, setLike] = useState(0);
  
  function likeFunc(){
    setLike(like+1);
  }
  function titleFunc(){
    // let copy = [...title];
    // copy[0] = "라"
    // setTitle(copy);
    title[0] = "라";
    setTitle(title);
    console.log(title);
    // console.log(copy);
  }

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>블로그</h4>
        </div>
        <button onClick={titleFunc}>글 변경</button>
        <div className="list">
          <h4>{title}<span onClick={likeFunc}>👍</span>{like}</h4>          
          <p>글 내용</p>
        </div>
        <div className="list">
          <h4>{title[1]}</h4>
          <p>글 내용</p>
        </div>
        <div className="list">
          <h4>{title[2]}</h4>
          <p>글 내용</p>
        </div>
      </div>
    </>
  )
}

export default App
