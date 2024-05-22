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

  if (!allEvents) {
    return res.status(404).json({ message: "No events have been found" });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    const currentEvent = allEvents.find((ev) => ev.id === eventId);

    if (!currentEvent) {
      return res
        .status(404)
        .json({ message: `Not Found. No event found with id: ${eventId}` });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res
        .status(400)
        .json({ message: `Bad Request. email: ${email} is not valid` });
    }

    if (currentEvent.emails_registered.includes(email)) {
      return res
        .status(409)
        .json({ message: `Bad request. email: ${email} already exists` });
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        return { ...ev, emails_registered: [...ev.emails_registered, email] };
      }
      return ev;
    });

    fs.writeFileSync(
      path,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `Email: ${email}  registered successfully in event: ${eventId}`,
    });
  }
}
