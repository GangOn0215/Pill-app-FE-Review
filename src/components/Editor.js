import React, { useState } from "react";

const Editor = ({onCreate}) => {
  // eatAfter true: After (식후), false: Before (식전)
  const [pillDatas, setPillDatas] = useState({
    pillName: "",
    pillDetail: "",
    isEatAfter: false,
    "expirationDate-start": "",
    "expirationDate-end": "",
  });
  
  
  const handleChange = (e) => {
    let propertyName = e.target.name;

    if(e.target.name === 'start' || e.target.name === 'end') {
      propertyName = `expirationDate-${e.target.name}`
    }

    setPillDatas({
      ...pillDatas,
      [propertyName]: e.target.value
    });
  }

  const eatMealToggle = () => { 
    console.log(pillDatas.isEatAfter);
    setPillDatas({
      ...pillDatas,
      isEatAfter: !pillDatas.isEatAfter
    }); 
  };

  const handleCreate = () => {
    onCreate(
      pillDatas.pillName, 
      pillDatas.pillDetail, 
      pillDatas.isEatAfter, 
      [ pillDatas["expirationDate-start"], pillDatas["expirationDate-end"] ]
    );
    console.log(pillDatas);
  }

  return (
    <div className="editor">
      <input 
        name="pillName"
        value={pillDatas.pillName} 
        onChange={handleChange}
      />
      <textarea 
        name="pillDetail"
        value={pillDatas.pillDetail} 
        onChange={handleChange} 
        />
        <button 
          name="eatMeal"
          onClick={eatMealToggle}
        >
        {pillDatas.isEatAfter ? '식후' : '식전'}
        </button>
        <div className="expiration-date">
          {/* 정규식으로 YYYY-MM-DD 설정하는거 생각해보기 */}
          <input
            name="start"
            value={pillDatas["expirationDate-start"]}
            onChange={handleChange}
            placeholder="유통기한 시작 날짜" /> 
          <span>~</span>
          <input 
            name="end"
            value={pillDatas["expirationDate-end"]}
            onChange={handleChange}
            placeholder="유통기한 마지막 날짜"/>
        </div>
      <button onClick={handleCreate}>Button</button>
    </div>
  )
}

export default Editor;