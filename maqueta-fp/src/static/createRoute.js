export default async function createRoute({
  title,
  url,
  country,
  city,
  type,
  distance,
  description,
}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      url,
      country,
      city,
      type,
      distance,
      description,
    }),
  };

  console.log(requestOptions);

  const response = await fetch(
    `http://localhost:4000/myRoutes/3`,
    requestOptions
  );
  const body = await response.json();
  return body;
}
