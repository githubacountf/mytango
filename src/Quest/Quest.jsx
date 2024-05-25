import React, { useState } from 'react';
import Data2 from './Hide';
import voice from "./voice.svg"
import { En, Ja } from '../Data';
import usePersist from "../Persist"

function Quest() {
  const [count, setCount] = useState(0);
  const [rangemin, setRangemin] = useState(0);
  const [rangemax, setRangemax] = useState(0);
  const number = En.length
  const [Misstakewords, setMisstakewords] = usePersist("word", [])
  const [missja,setMissja]=usePersist("ja",[])
  const [missnum,setMissNum]=usePersist("num",0)
  function countup() {
    if (count < En.length - 1) {
      setCount(count + 1);
      speak(En[count + 1])
    }
  }

  function countdown() {
    if (count > 0) {
      setCount(count - 1);
      speak(En[count - 1])
    }
  }
  function doChange(e) {
    const newValue = parseInt(e.target.value);
    setCount(newValue - 1);
  }
  function doChangemin(e) {
    const newValue = parseInt(e.target.value);
    setRangemin(newValue)
  }
  function doChangemax(e) {
    const newValue = parseInt(e.target.value);
    setRangemax(newValue)
  }
  function randomall() {
    setCount(Math.floor(Math.random() * 1201))
  }
  function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function Change() {
    const rann = random(rangemax, rangemin)
    setCount(rann)
  }
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    // 英語の音声合成を使用するための言語設定
    utterance.lang = 'en-US'; // 英語の場合は'en-US'を指定
    speechSynthesis.speak(utterance);
  };
  function voic() {
    speak(En[count])
  };

  function stock() {
    setMisstakewords([...Misstakewords, En[count]])
    setMissja([...missja, Ja[count]])
    setMissNum(count)
  }
  
  const removeSelectedOption = () => {
    const selectElement = document.querySelector('select');
    const selectedIndex = selectElement.selectedIndex;
    if (selectedIndex !== -1) {
      const updatedMisstakewords = [...Misstakewords];
      updatedMisstakewords.splice(selectedIndex, 1);
      setMisstakewords(updatedMisstakewords);
    }
  }


  return (
    <>
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <img src={voice} onClick={voic} style={{ height: "30px", width: "30px" }} alt="voice" />
          <button onClick={stock} style={styles.button}>間違いを保存する</button>
        </div>
        <Data2 count={count} En={En[count]} Ja={Ja[count]} />
        <div style={styles.buttonContainer}>
          <button style={styles.button2} onClick={countdown}>前の単語へ</button>
          <button style={styles.button2} onClick={countup}>次の単語へ</button>
        </div>
      </div>
      <div>
        <h style={{ fontSize: "20px" }}>ランダムで問題を出します</h>
        <p>Part1:</p>
        <div style={styles.buttonContainer}>
          <button style={styles.button3} onClick={randomall}>全範囲ランダム</button>
        </div>

        <p>Part2:</p>
        <div style={{ display: "flex" }}>
          <input type="number" onChange={doChangemin} style={{ height: "20px", width: "70px" }} />
          ～
          <input type="number" onChange={doChangemax} style={{ height: "20px", width: "70px" }} />
          <button onClick={Change}>Click!!</button>
        </div>
        <p>の範囲でランダムに出題します</p>

        <div>
          <h style={{ fontSize: "20px" }}>指定した数の単語へ飛ぶ(1~{number}まで)</h>
          <div>
            <input type="number" onChange={doChange} />
          </div>
        </div>
        <br></br>
      </div>
      <h3>間違いリスト</h3>
      <select style={{fontSize:"20px"}}>
        {Misstakewords.map((word,key)=>(
          <option value={key}>{word}</option>
        ))}
      </select>
      <button onClick={removeSelectedOption}>削除</button>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ background: '#e9faf9', padding: '8px', textAlign: 'left', borderBottom: 'solid 1px #778ca3', border: 'solid 1px #778ca3' }}>英語</th>
            {/* <th style={{ background: '#e9faf9', padding: '8px', textAlign: 'left', borderBottom: 'solid 1px #778ca3', border: 'solid 1px #778ca3' }}>日本語</th> */}
          </tr>
        </thead>
        <tbody>
          {Misstakewords.map((word, key) => (
            <tr key={key}>
              <td style={{ padding: '8px', border: 'solid 1px #778ca3' }}>{word}</td>
              {/* <td style={{ padding: '8px', border: 'solid 1px #778ca3' }}>{missnum+1},{missja[key]}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  button: {
    backgroundColor: '#A9A9A9',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  button2: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  button3: {
    backgroundColor: '#660066	',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};



export default Quest;
