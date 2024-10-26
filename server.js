const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulate a simple visitor counter
let totalVisitors = 0;

// Route for updating visitor count
app.post("/api/visit", (req, res) => {
    totalVisitors++;
    res.json({ totalVisitors });
});

// Route for getting visitor count
app.get("/api/visit", (req, res) => {
    res.json({ totalVisitors });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
