import { useState } from "react";
import Characters from "./Characters";
import Locations from "./Locations";
import { Character, Maybe } from "./gqty";

function App() {
  const [activeCharacter, setActiveCharacter] = useState<Maybe<Character>>();

  return (
    <>
      <h1>GQTY rendering</h1>

      {activeCharacter && (
        <>
          <button onClick={() => setActiveCharacter(undefined)}>Close</button>
          <Locations />
        </>
      )}

      <p>
        Click on a character may triggers infinite fetch loop, usually happens
        within 3 tries.
      </p>

      <Characters
        onClick={(p) => {
          setActiveCharacter(p);
        }}
      />
    </>
  );
}

export default App;
