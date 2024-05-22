import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const EventCard = ({ event }) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const inputEmail = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router.query.id;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue.match(emailRegex)) {
      setMessage("Please, provide a correct email");
      setError(true);

      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 3000);

      return;
    }

    try {
      const response = await fetch("/api/email_registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      inputEmail.current.value = "";

      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }

      const data = await response.json();
      console.log("DATA: ", data);
      setMessage("Email added successfully");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.log("ERROR: ", error);
      setMessage("ERROR: " + error);
      setError(true);
      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{event.title}</h1>
      <Image src={event.image} alt={event.title} width={1000} height={500} />
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {event.description}
      </p>
      <form onSubmit={handleSubmit} className="event_register_form">
        <label style={{ fontWeight: "bold", marginRight: "1rem" }}>
          Get registered for this event!
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Please, insert your email here"
          autoComplete="off"
          ref={inputEmail}
        />
        <button type="submit">Submit</button>
      </form>
      <p className={!message ? "" : error ? "errMsg" : "successMsg"}>
        {message}
      </p>
    </div>
  );
};

export default EventCard;
