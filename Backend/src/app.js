const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const multer = require("multer")

const app = express()

// Middleware
app.use(express.json())
app.use(cookieParser())

// CORS configuration
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
    "https://airesume-1-ycaj.onrender.com",
    process.env.FRONTEND_ORIGIN
].filter(Boolean)

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests without an Origin header
        // (for example, curl/Postman/server-to-server)
        if (!origin) {
            return callback(null, true)
        }

        if (allowedOrigins.includes(origin)) {
            return callback(null, true)
        }

        return callback(new Error("Not allowed by CORS"))
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

// Routes
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

// Test route
app.get("/", (req, res) => {
    res.send("Server is running")
})

app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        const message = error.code === "LIMIT_FILE_SIZE"
            ? "Resume file must be 5MB or smaller."
            : "Only PDF resume files are supported."

        return res.status(400).json({ message })
    }

    next(error)
})

module.exports = app