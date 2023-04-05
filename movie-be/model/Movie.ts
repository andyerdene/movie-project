import mongoose from "mongoose";

interface iMovie {
  title: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
}

const MovieSchema = new mongoose.Schema<iMovie>(
  {
    title: String,
    year: Number,
    imdb: {
      rating: Number,
      votes: Number,
      id: Number,
    },
  },
  {
    collection: "movies",
  }
);

const Movie = mongoose.model("Movie", MovieSchema, "movies");

export default Movie;
