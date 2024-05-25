import React, { useState } from 'react'

function Data2(props) {
    const[j,setJ]=useState(false)
    function hide(){
        setJ(!j);
    };
  return (
    <div style={containerStyle}>
        <div style={{fontSize:"40px"}}>{props.En}</div>
        <div>
        {j && <div style={{fontSize:"30px"}}><h>{props.count+1}:{props.Ja}</h></div>}
        <button style={buttonStyle} onClick={hide}>日本語を{j?"隠す":"見る"}</button>
        </div>
    </div>
  )
}

export default Data2;
const containerStyle = {
    margin: '20px',
    padding: '10px',
    // border: '1px solid #ccc',
    borderRadius: '5px'
};

const buttonStyle = {
    marginTop: '10px',
    backgroundColor: '#00CCCC',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer'
};