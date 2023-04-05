// import Head from "next/head";

import Layout from "@/components/Layout";
import { MovieType } from "@/util/types";
import Link from "next/link";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  const { movies } = props;

  return (
    <Layout>
      Nuur huudas
      {movies.map((movie: MovieType, index: number) => (
        <Link href={`movie/${movie._id}`} key={index} className="m-5">
          <div className="w-1/6 h-1/6 bg-white text-black border-1 rounded text-center text-lg">
            Click me
          </div>
        </Link>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5001/movies");
  const movies = await res.json();
  return {
    props: {
      movies: movies,
    },
  };
}
