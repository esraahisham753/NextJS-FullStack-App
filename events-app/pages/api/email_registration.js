import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const path = buildPath();
  const { events_categories, allEvents } = extractData(path);

  if (method === "POST") {
    const { email, eventId } = req.body;

    res.status(200).json({
      message: `Email: ${email}  registered successfully in event: ${eventId}`,
    });
  }
}
