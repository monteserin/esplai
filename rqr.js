export const getFilmnsFromURls = () =>{
  const data = await Promise.all(
  ids.map(async (id) => {
    const r = await axios.get("https://example.com/" + id);
    return r.data;
  })
);
return data;
}