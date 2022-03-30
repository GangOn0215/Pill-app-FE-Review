import './App.css';
import React, { useRef, useEffect, useReducer } from "react";
import Header from './components/Header';
import List from './components/List';
import dummyJSON from './dummy.json';

// React - useState, useRef, useEffect, useMemo, React.memo, useCallback, useReducer, useContext
// Router - useRouter, Link

const reducer = (state, action) => {
  switch(action.type) {
    case "INIT":
      return action.initData;
    case "CREATE":
      const createdDate = new Date().getTime();
      const newItem = {
        ...action.data,
        createdDate,
        atePillDate: [],
      }

      
      return [newItem, ...state];
    default:
      return state;  
  }
}

/* pillData {
    id: 아이디
    pillName: 알약 이름
    pillDetail: 알약 상세정보
    toggleEatMeal: 식전 식후
    expirationDate: 유통 기한
    createdDate: data 생성 날짜와 시간
    atePillDate: 먹은 시간 (배열)
  } 
*/

function App() {
  const [pillData, Dispatch] = useReducer(reducer, []);
  const pkID = useRef(0);
  
  const InitPillData = () => {
    const initData = dummyJSON.map((item) => {
      return {
        id: pkID.current++,
        pillName: item.pillName,
        pillDetail: item.pillDetail,
        eatAfter: item.eatAfter,
        expirationDate: item.date.expiration,
        createdDate: item.date.created,
        updateDate: item.date.update,
        atePillDate: item.date.atePill,
        photo: item.photoURL,
      };
    });

    Dispatch({type: "INIT", initData});
  }

  const onCreate = (pillName, pillDetail, eatAfter, expirationDate) => {
    Dispatch({type: "CREATE", data: {pillName, pillDetail, eatAfter, expirationDate, id: pkID.current}});

    pkID.current++;
  }

  useEffect(() => {
    InitPillData();
  }, []);

  console.log(pillData);

  return (
    <div className="App">
      <Header onCreate={onCreate}/>
      <List />
    </div>
  );
}

export default App;
