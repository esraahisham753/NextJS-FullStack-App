import EventsCat from "@/src/components/events/eventsCat";

const EventsCatPage = ({ pageName, events }) => {
  return (
   <EventsCat pageName={pageName} events={events}/>
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
