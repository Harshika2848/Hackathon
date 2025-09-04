const express = require("express");
const cors = require("cors");
require("./db");

const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/notes", noteRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
