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

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.post("/api/answer", (req, res) => {

    const answer = req.body.answer;

    res.json({
        received: answer,
        message: "Answer submitted successfully"
    });

});