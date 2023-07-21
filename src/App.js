import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome"; //tenemos img, del componente welcome
import CharaterContainer from "./components/CharactersContainer";
import { useState } from "react";

function App() {
  const [character, setCharacter] = useState(null);

  const reqApi = async () => { 
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3"); 
    const frase = await api.json();
    setCharacter(frase);
  };

  return (
    <div>
      <Container>
        <Header />
        {!character ? (
          <Welcome reqApi={reqApi}/>
        ):(
          <CharaterContainer character={character} reqApi={reqApi}/>
        )}
      </Container>
    </div>
  );
}



export default App;