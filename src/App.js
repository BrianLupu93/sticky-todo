import "./App.css";
import InputForm from "./components/input-form/InputForm";
import { useState } from "react";
import Sticky from "./components/sticky/Sticky";

function App() {
  const [stickers, setStickers] = useState([]);

  return (
    <div className="App">
      <h1 className="app-title">My sticky Notes</h1>

      <InputForm />
      <Sticky
        title={"Sticker Title"}
        body={"This is the body"}
        date={"22-03-2012"}
      />
    </div>
  );
}

export default App;
