import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <section className="home_body">
      {data.map((ev) => {
        return (
          <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
            <div className="image">
              <Image
                className="card-img"
                src={ev.image}
                alt={ev.title}
                width={400}
                height={300}
              />
            </div>
            <div className="content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default HomePage;
