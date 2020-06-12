export async function FetchData(url: string) {
  const res = await fetch(url);

  return await res.json();
}
