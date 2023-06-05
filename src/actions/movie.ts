import { customFetch } from "@/src/helpers/helpers/fetch";
import { Credit } from "@/types/credit";

export async function getMovie(id: string): Promise<Movie> {
  const res = await customFetch({
    url: `/movie/${id}?language=en-US`,
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getMovies(
  page = 1,
  category = "now_playing"
): Promise<MovieList> {
  const res = await customFetch({
    url: `/movie/${category}?language=en-US&page=${page}`,
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
