import React, { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });

  // Fetch notes
  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5000/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => { fetchNotes(); }, []);

  // Add note
  const addNote = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", content: "" });
    fetchNotes();
  };

  // Delete note
  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Notes App</h1>

      <form onSubmit={addNote}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {notes.map((n) => (
          <li key={n._id}>
            <b>{n.title}:</b> {n.content}
            <button onClick={() => deleteNote(n._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
