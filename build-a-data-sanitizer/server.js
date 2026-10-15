import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { inputCleaner, inputValidator } from "./middleware.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/form");
});

app.get("/form", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    console.log(`Filename: ${__filename} \n Dir Name: ${__dirname}`);

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
    res.json({
        success: true,
        username: req.body.username,
        comment: req.body.comment
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));