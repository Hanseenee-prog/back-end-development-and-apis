import express from "express";
import weatherRouter from "./weather.js";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "public");

app.use(express.static(filePath));

app.use('/api/weather', weatherRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(filePath, 'index.html'));
})

app.get('/api/info', (req, res) => {
    res
        .status(200)
        .json({
        name: "Weather Service API",
        version: "1.0.0",
        endpoints: ["/api/weather/:city", "/api/greet/:name", "/api/data"],
    });
})

app.get('/docs', (req, res) => {
    res.redirect('/api/info')
})

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));