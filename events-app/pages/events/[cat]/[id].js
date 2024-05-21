import EventCard from "@/src/components/events/eventCard";

const EventPage = ({ event }) => {
  return (
    <EventCard event={event} />
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
