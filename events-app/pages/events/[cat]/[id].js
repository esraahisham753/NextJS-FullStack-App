import Image from "next/image";

const EventPage = ({ event }) => {
  return (
    <div>
      <Image src={event.image} alt={event.title} width={1000} height={300} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        id: ev.id,
        cat: ev.city
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const event_id = context?.params.id;

  const event = allEvents.find((ev) => ev.id === event_id);

  return {
    props: {
      event,
    },
  };
}
