const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("InterviewMate Backend Running");
});

app.get("/api/question", (req, res) => {
    res.json({
        question: "Tell me about yourself."
    });
});

const mongoose = require("mongoose");

const Answer = require("./models/Answer");

mongoose.connect("mongodb+srv://dharya:dharya@cluster0.2gwg1jt.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.post("/api/answer", async (req, res) => {

    try {

        const newAnswer = new Answer({
            answer: req.body.answer
        });

        await newAnswer.save();

        res.json({
            success: true,
            message: "Answer Saved"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});