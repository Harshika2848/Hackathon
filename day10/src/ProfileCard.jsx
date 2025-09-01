import React from "react";

export default function ProfileCard({ name, role, bio, avatar }) {
  return (
    <div className="max-w-sm w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg transform transition hover:scale-105 hover:shadow-indigo-500/40">
      <div className="flex flex-col items-center text-center">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-indigo-400 shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-white">{name}</h2>
        <p className="text-indigo-300 font-medium">{role}</p>
        <p className="mt-3 text-gray-300">{bio}</p>
        <button className="mt-5 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-xl shadow hover:bg-indigo-600 transition">
          Connect
        </button>
      </div>
    </div>
  );
}
