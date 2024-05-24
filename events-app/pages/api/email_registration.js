import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const client = await clientPromise;
    const db = client.db("events"); // Assume you're updating by some identifier
    const { email, eventId } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email | !email.match(emailRegex)) {
      return res.status(400).json({ message: "Not a valid email" });
    }

    const document = await db.collection("events").findOne({ id: eventId });

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    if (document.emails_registered.includes(email)) {
      return res.status(400).json({message: "Email"})
    }

    const result = await db.collection("events").updateOne(
      { id: eventId },
      {
        $set: {
          emails_registered: [...document.emails_registered, email],
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
