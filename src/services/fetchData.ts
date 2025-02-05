export const fetchData = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.statusText}`);
  }
  return res.json();
};
