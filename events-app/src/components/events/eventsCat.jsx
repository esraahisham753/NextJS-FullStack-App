import Image from "next/image";
import Link from "next/link";

const EventsCat = ({ pageName, events }) => {
  return (
    <div className="events_cat">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {events.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${pageName}/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCat;
