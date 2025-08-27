import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ProfileCard
        name="Harshika Chauhan"
        role="Frontend Developer"
        image="https://via.placeholder.com/100"
        bio="Passionate about building modern web apps using React and JavaScript."
      />
    </div>
  );
}

export default App;
