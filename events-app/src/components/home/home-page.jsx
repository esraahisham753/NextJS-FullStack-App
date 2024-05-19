import Link from "next/link";
import Image from "next/image";

const HomePage = ({data}) => {
  return (
    <main>
      {data.map((ev) => {
        return (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        );
      })}
    </main>
  );
};

export default HomePage;
