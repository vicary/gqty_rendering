import { Grommet, Layer } from "grommet";
import { hpe } from "grommet-theme-hpe";
import { useState } from "react";
import Characters from "./Characters";
import Locations from "./Locations";
import { Character, Maybe } from "./gqty";

function App() {
  const [activeCharacter, setActiveCharacter] = useState<Maybe<Character>>();

  return (
    <Grommet full theme={hpe}>
      <h1>GQTY rendering</h1>

      {activeCharacter && (
        <Layer position={"top"} onEsc={() => setActiveCharacter(undefined)}>
          <Locations />
        </Layer>
      )}

      <Characters
        onClick={(p) => {
          setActiveCharacter(p);
        }}
      />
    </Grommet>
  );
}

export default App;
