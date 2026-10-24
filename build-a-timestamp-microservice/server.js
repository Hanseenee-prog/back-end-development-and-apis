import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

const handleTimeStamp = (req, res) => {
  const { date } = req.params;
  let dateString;

  if (!date) {
    dateString = new Date();
  }
  else {
    const isNumeric = /^\d+$/.test(date);

    // If it is, parse it as an integer. Otherwise, pass it as a date string.
    dateString = isNumeric ? new Date(parseInt(date)) : new Date(date);
  }

  if (isNaN(dateString.getTime())) {
    return res
    .status(400)
    .json({ error : "Invalid Date" })
  }

  return res.json({
    unix: dateString.getTime(),
    utc: dateString.toUTCString()
  })
}

app.get('/api/', handleTimeStamp);
app.get('/api/:date', handleTimeStamp);

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
