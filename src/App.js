import './App.css';
import React, { useEffect, useReducer } from "react";
import Header from './components/Header';
import List from './components/List';
import dummyJSON from './dummy.json';

// React - useState, useRef, useEffect, useMemo, React.memo, useCallback, useReducer, useContext
// Router - useRouter, Link

const reducer = (state, action) => {
  switch(action.type) {
    case "INIT":
      return action.initData;
    default:
      return state;  
  }
}

function App() {
  const [pillData, Dispatch] = useReducer(reducer, []);
  
  const InitPillData = () => {
    const initData = dummyJSON.map((item) => {
      return {
        id: item.id,
        pillName: item.pillName,
        pillDetail: item.pillDetail,
        toggleEatMeal: item.toggleEatMeal,
        expirationDate: item.expirationDate,
        createdDate: item.createdDate,
        updateDate: item.updateDate,
        atePillDate: item.atePillDate,
      };
    });

    Dispatch({type: "INIT", initData});
  }

  useEffect(() => {
    InitPillData();
  }, []);

  console.log(pillData);
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
