import { Select } from "@components/select";
import { useState } from "react";

const options: SelectProps[] = [
  { value: "education", label: "Education", emoji: "🎓" },
  { value: "science", label: "Yeeeah, science!", emoji: "🔬" },
  { value: "art", label: "Art", emoji: "🎨" },
  { value: "sport", label: "Sport", emoji: "⚽️" },
  { value: "games", label: "Games", emoji: "🎮" },
  { value: "health", label: "Health", emoji: "🏥" },
];

function App() {
  const [selected, setSelected] = useState<SelectProps>(options[1]);

  return (
    <div className="main-wrapper">
      <div className="container">
        <Select options={options} selected={selected} onChange={setSelected} />
        <p>{selected.label}</p>
      </div>
    </div>
  );
}

export default App;
