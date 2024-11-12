import React, { useState } from 'react'

import './App.css'

function ToggleName() {
  const [isVisible, setVisibility] = useState(false);

  function handleClick() {
    setVisibility(!isVisible);
  }

  return (
    <>
      <button onClick={handleClick}>{isVisible ? "Sembunyikan" : "Tampilkan"}</button>
      {isVisible && <p>Nama: Cherryl Callista</p>}
    </>
  )
}

export default ToggleName
