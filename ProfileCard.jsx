import "./ProfileCard.css";

function ProfileCard({ team }) {
  return (
    <div className="card">
    {/* <h2>Our Team</h2> */}
      <ul>
        {team.map((member, index) => (
          <li key={index} style={{ backgroundColor: member.color }}>
            <span className="name">{member.name}</span>
            <span className="role">{member.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
