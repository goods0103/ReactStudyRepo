import { use, useState } from 'react'
import './App.css'

function App() {
  let [title, setTitle] = useState(['남자', '강남', '파이썬']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function likeFunc(i) {
  }
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
                <h4>{title[i]}<span onClick={() => {
                  let copy = [...like]
                  copy[i]++
                  console.log(copy)
                  console.log(like)
                  setLike(copy); 
                }}>👍</span>{like[i]}</h4>
                <p onClick={() => setModal(!modal)}>글 내용</p>
              </div>
            )
          })
        }
        {
          modal == true ? <Modal /> : null
        }
      </div>
    </>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App
