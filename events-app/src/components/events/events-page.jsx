import Image from "next/image";
import Link from "next/link";

const EventsMain = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => {
        return (
          <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={400} />
            <h2>{ev.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default EventsMain;
