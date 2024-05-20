import Image from "next/image";
import Link from "next/link";

const EventsMain = ({data}) => {
  return (
    <div>
      <h1>Events page</h1>
      <div className="events_page">
        {data.map((ev) => {
          return (
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <Image src={ev.image} alt={ev.title} width={300} height={300} />
              <h2>{ev.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventsMain;
