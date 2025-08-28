import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const team = [
    { name: "Harshika Chauhan", role: "Leader", color: "#FFB6B9" },
    { name: "Mahak Dhanotiya", role: "Backend Developer", color: "#A8E6CF" },
    { name: "Payal Sartaliya", role: "UI/UX Designer", color: "#FFD3B6" },
  ];

  return (
    <div className="container">
      <h1>Team :- Triple Byte Squad</h1>
      <ProfileCard team={team} />
    </div>
  );
}

export default App;
