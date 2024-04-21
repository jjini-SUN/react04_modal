import logo from './logo.svg';
import './App.css';
import  Modal from './components/modal-popup/modal.jsx';
import { useState } from 'react';
//.jsx : 자바스크립트에서 HTML 형식으로 코딩할 수 있게 도와주는 확장자
//index 이름은 폴더까지만 import 해도 됨
//state를 만들어서 모달창을 띄우고 지우고

function App() {
  let [showModal, setShowModal] = useState(false);  //true면 모달뜨고, false면 안뜨고

  function modalClose() {
    //Modal을 열기 위해선 setShowModal(true)했으니깐 
    //닫기 위해선 setShowModal(false)
    //화면을 변경하기 위해선 state로 수정한다
    showModal && setShowModal(false)
  }

  //버튼 누르면 setShowModal을 true로 바꾼다 (showModal을 true로 변경하게끔)
  return (
    <div className="App">
      <button onClick = {()=>{setShowModal(true)
        // if (showModal === false) setShowModal(true)
        // else setShowModal(false)
        }}>모달창 열기</button>
      
      {
        //showModal이 true면 <Modal /> 실행하게끔 코딩
        //&& : 그리고 (앞과 뒤과 맞으면 true, 하나라도 틀리면 false)
        //&& : 앞에꺼가 틀리면 (false, null, Nan) 뒤에꺼는 어차피 검사(실행)안함  ->  showModal && <Modal/>
        showModal === true ? <Modal id={'modal-1'} onClose={modalClose} 
        _header={<p>MODAL 실습</p>} _body={<div>
          <img src = '/커피.jpg'/>
          </div>} _footer={<p>@seojin 2024-04-21</p>}/> : null
      }
    </div>
  );
}

export default App;
