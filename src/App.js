import All from "./All/All";
import Quest from "./Quest/Quest";
import React, { useState } from "react";
function App() {
  const [i, setI] = useState(0)
  if (i === 0) {
    function up() {
      setI(1)
    }
    return (
      <div>
        <button style={styles.button} onClick={up}>問題へ</button>
        <All />
      </div>
    );
  }
  else {
    function down() {
      setI(0)
    }
    return (
      <div>
        <Quest />
        <br></br>
        <button onClick={down}style={styles.button}>一覧へ</button>
      </div>
    )
  }

}
const styles = {
  button: {
    backgroundColor: '#007700',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
export default App;


