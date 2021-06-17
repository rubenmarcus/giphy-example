import { API_KEY, API_URL } from "../config";

export default async function fetchApi(endpoint: string, query?: string) {
  const url = query
    ? `${API_URL}/${endpoint}?api_key=${API_KEY}&q=${query}`
    : `${API_URL}/${endpoint}?api_key=${API_KEY}`;
  const res = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  return res;
}
