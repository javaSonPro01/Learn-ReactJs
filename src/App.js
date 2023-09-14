import { useState } from "react";
import Component from "./Component";

function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Click me!!!!!</button>
      {show && <Component />}
    </div>
  );
}

export default App;
