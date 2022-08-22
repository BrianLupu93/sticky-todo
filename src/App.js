import "./App.css";
import Sticky from "./components/sticky/Sticky.jsx";
import { useState } from "react";

function App() {
  const [stickers, setStickers] = useState([
    { title: "brian", body: "programare la doctor", date: "22-22-22" },
  ]);

  const newSticky = (title, body, date) => {
    return setStickers({
      title,
      body,
      date,
    });
  };

  console.log(stickers);
  return (
    <div className="App">
      {stickers.map((sticker, i) => {
        return (
          <Sticky
            key={i}
            title={sticker.title}
            body={sticker.body}
            date={sticker.date}
          />
        );
      })}
    </div>
  );
}

export default App;
