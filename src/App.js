import React, { useState } from 'react';
import { Wrapper, List, Title, Combo } from './styles';
import GlobalStyle from './styles/global';
import { FaAngleDown } from "react-icons/fa";

function App() {
  const [options] = useState(['ReactJS', 'NodeJS', 'VueJS', 'Angular', 'Java', 'MongoDB', 'Ember', 'Docker', 'Git', 'Python', 'Linux']);
  const [selected, setSelected] = useState('Dropdown');
  const [box, setBox] = useState(false)

  function toggleOptions() {
    setBox(!box);
  }

  function selectOption(option) {
    setSelected(option);
    setBox(!box);
  }

  return (

    <div className="App">
      <GlobalStyle />
      <h1 style={{ marginTop: "40px", display: "flex", justifyContent: "center", color: "#009999" }} >Dropdown</h1>
      <Wrapper  >
        <Combo >
          <Title onClick={toggleOptions} >
            <span>{selected}</span>
            <div>
              <FaAngleDown color="#fff" size={15} />
            </div>
          </Title>
          <div style={{ height: "250px", overflow: "auto" }}>
              {
                
                box ?
                  options.map(option =>  <List key={option} onClick={e => { selectOption(option) }}>{option}</List>)
                  : <></>
              }
          </div>
        </Combo>
      </Wrapper>
    </div>
  );
}

export default App;
