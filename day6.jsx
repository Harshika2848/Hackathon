// src/components/ProfileCard.jsx
function ProfileCard({ name, role, image, bio }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{bio}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px"
  }
};

export default ProfileCard;
