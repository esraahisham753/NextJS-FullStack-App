const EventsCatPage = () => {
  return (
    <div>
      <h1>Events in London</h1>
      <div>
        <a href="/events/event1">
          <h2>event1</h2>
        </a>
        <a href="/events/event2">
          <h2>event2</h2>
        </a>
        <a href="/events/event3">
          <h2>event3</h2>
        </a>
        <a href="/events/event4">
          <h2>event4</h2>
        </a>
        <a href="/events/event5">
          <h2>event5</h2>
        </a>
        <a href="/events/event6">
          <h2>event6</h2>
        </a>
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

  console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  console.log(context);

  return {
    props: {},
  };
}
