import { Select } from "@components/select";
import { useState } from "react";

const options: SelectProps[] = [
  { value: "education", label: "Education", emoji: "🎓" },
  { value: "science", label: "Yeeeah, science!", emoji: "🔬" },
  { value: "art", label: "Art", emoji: "🎨" },
  { value: "sport", label: "Sport", emoji: "⚽️" },
  { value: "games", label: "Games", emoji: "🎮" },
  { value: "health", label: "Health", emoji: "🏥" },
  { value: "music", label: "Music", emoji: "🎵" },
  { value: "technology", label: "Technology", emoji: "💻" },
  { value: "travel", label: "Travel", emoji: "✈️" },
  { value: "food", label: "Food & Drink", emoji: "🍕" },
  { value: "finance", label: "Finance", emoji: "💰" },
  { value: "movies", label: "Movies & TV", emoji: "🎬" },
  { value: "nature", label: "Nature", emoji: "🌳" },
  { value: "fashion", label: "Fashion", emoji: "👗" },
  { value: "history", label: "History", emoji: "📜" },
];

function App() {
  const [selected, setSelected] = useState<SelectProps>(options[0]);

  return (
    <div className="main-wrapper">
      <Select options={options} selected={selected} onChange={setSelected} />
    </div>
  );
}

export default App;
