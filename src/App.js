import "./App.css";
import { Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
import { Input } from "./components/Input";
import { Myself } from "./components/Myself";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Paragraph />
      <Input />
      <Myself name="Seyram Wood Prikah" age="20" gender="male" />
      <Myself name="Rejoice Makafui Prikah" age="22" gender="female" />
      <Myself name="Thomas Aftorwu" age="30" gender="male" />
      <Myself name="Enyonam Agoha" age="25" gender="female" />
      <Myself name="Bright Agbezuhlor" age="35" gender="male" />
      <Counter />
    </div>
  );
}

export default App;
