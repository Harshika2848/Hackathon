import React from "react";
import ProfileCard from "./ProfileCard"

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProfileCard
        name="Mahak Dhanotiya"
        role="Full Stack Developer"
        bio="Passionate about building modern web apps with React and Tailwind."
        avatar="https://randomuser.me/api/portraits/women/44.jpg"

      />
    </div>
  );
}
