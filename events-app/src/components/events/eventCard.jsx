import Image from "next/image";

const EventCard = ({ event }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          Get registered for this event
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Please, insert your email here"
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventCard;
