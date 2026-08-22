require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { generalLimiter } = require("./middleware/rateLimiter");

const authRoutes = require("./routes/authRoutes");
const companyRoutes = require("./routes/companyRoutes");
const progressRoutes = require("./routes/progressRoutes");
const aiRoutes = require("./routes/aiRoutes");
const adminRoutes = require("./routes/adminRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Root route
app.get("/", (req, res) => {
  res.send("Campus2Career API is running");
});

// API Routes
app.use("/api", generalLimiter);
app.use("/api/auth", authRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/resume", resumeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Campus2Career Modular API Server running on http://localhost:${PORT}`);
});