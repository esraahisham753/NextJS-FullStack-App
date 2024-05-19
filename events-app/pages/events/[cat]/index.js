import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ pageName, events }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {events.map((ev) => (
          <Link
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

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");

  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  //console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const id = context?.params.cat;
  const events = allEvents.filter((event) => event.city === id);

  return {
    props: {
      pageName: id,
      events,
    },
  };
}
