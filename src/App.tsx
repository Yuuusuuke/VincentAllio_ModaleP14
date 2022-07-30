import React, { useState } from 'react';
import './App.css';
import Modale from "./components/modale/modale"

function App() {
  const [show, setShow] = useState(true);

  const Text = "Employee Created !"
  return (
    <>
    {show && <Modale setFunction={setShow} text={Text} />}
    </>
  );
}

export default App;
