import React, { useState } from 'react';
import { Wrapper, List, Title, Dropdown, Overlay } from './styles';
import GlobalStyle from './styles/global';
import { FaAngleDown } from "react-icons/fa";

function App() {
  const [options] = useState(['ReactJS', 'NodeJS', 'VueJS', 'Angular', 'Java', 'MongoDB', 'Ember', 'Docker', 'Git', 'Python', 'Linux']);
  const [selected, setSelected] = useState('Dropdown');
  const [visibility, setVisibility] = useState(false);

  function toggleOptions() {
    setVisibility(!visibility);
  }

  function selectOption(option) {
    setSelected(option);
    setVisibility(!visibility);
  }

  function hideOption() {
    setVisibility(false);
  }

  return (
    <>
      <div className="App">
        <GlobalStyle />
        <h1 style={{ marginTop: "40px", display: "flex", justifyContent: "center", color: "#009999" }} >Dropdown</h1>
        <Wrapper >
          <Dropdown >
            <Overlay tabIndex="0" onBlur={hideOption} >
              <Title onClick={toggleOptions} >
                <span>{selected}</span>
                <div>
                  <FaAngleDown color="#fff" size={15} />
                </div>
              </Title>
              <div style={{ height: "250px", overflowY: "auto", overflowX: "hidden" }}>
                {
                  visibility ?
                    options.map(option => <List key={option} onClick={e => { selectOption(option) }}>{option}</List>)
                    : <></>
                }
              </div>
            </Overlay>
          </Dropdown>
        </Wrapper>
        <input placeholder={"Test OnBlur pressing Tab"} style={{ marginTop: "270px" }} type="text" />
      </div>

    </>
  );
}

export default App;
