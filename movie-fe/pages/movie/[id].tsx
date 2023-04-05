import { MovieType } from "@/util/types";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function Movie({ data: movie }: { data: MovieType }) {
  return (
    <div>
      ID: {movie._id}
      <div>
        <h2>{movie.title}</h2>
        <picture>
          <img src={movie.poster} alt="" />
        </picture>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:5001/movies-id`);
  const resJson = await res.json();
  const paths = await resJson.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

interface MovieProps {
  data: MovieType | null;
}

export const getStaticProps: GetStaticProps<MovieProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await fetch(`http://localhost:5001/movie/${params?.id}`);
  const movie = await res.json();
  return {
    props: {
      data: movie,
    },
  };
};
