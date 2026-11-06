
const express = require("express");
const cors = require("cors");
const employeeRoutes = require("./src/routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Employee Management Backend is Running!");
});

app.use("/api/employees", employeeRoutes);

// Local development
if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Vercel deployment
module.exports = app;
