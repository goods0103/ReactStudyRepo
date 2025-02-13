import { use, useState } from 'react'
import './App.css'

function App() {
  let [title, setTitle] = useState(['남자', '강남', '파이썬']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [click, setClick] = useState(0);
  let [input, setInput] = useState("");

  function titleFunc() {
    let copy = [...title];
    copy[0] = "라"
    setTitle(copy);
    // title[0] = "라";
    // setTitle(title);
    // console.log(title);
    console.log(copy);
  }

  function sortFunc() {
    let copy = [...title];
    copy.sort();
    setTitle(copy);
    console.log(title);
  }

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>블로그</h4>
        </div>
        <button onClick={titleFunc}>글 변경</button>
        <button onClick={sortFunc}>글 정렬</button>
        {
          title.map((a, i) => {
            return (
              <div className="list">
                <h4 onClick={() => { setModal(!modal); setClick(i); }}  >{title[i]}<span onClick={() => {
                  let copy = [...like]
                  copy[i]++
                  console.log(copy)
                  console.log(like)
                  setLike(copy);
                }}>👍</span>{like[i]}</h4>
                <p>글 내용</p>
                <button onClick={()=>{
                  let copy = [...title];
                  copy.splice(i,1);
                  setTitle(copy);
                }}>글 삭제</button>
              </div>
            )
          })
        }
        <input type="text" onChange={(e) => {
          setInput(e.target.value);
        }}
        ></input>
        {/* title에 value값 추가 */}
        <button onClick={()=>{
          setTitle([input, ...title]);
          setLike([0, ...like]);
          console.log(title);
        }}>글발행</button>
        {
          modal == true ? <Modal click={click} title={title} color={'skyblue'} /> : null
        }
      </div>
    </>
  )
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.click]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
      {/* 글 수정 누르면 첫 제목이 변경되도록 해야된다 */}
    </div>
  )
}


export default App
