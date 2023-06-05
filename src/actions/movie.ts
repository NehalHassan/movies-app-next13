import { customFetch } from "@/src/helpers/helpers/fetch";

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
