import Image from "next/image";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events page</h1>
      <div>
        {data.map((ev) => {
          return (
            <a href={`/events/${ev.id}`}>
              <Image src={ev.image} alt={ev.title} width={200} height={200} />
              <h2>{ev.title}</h2>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  //console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
