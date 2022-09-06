export default async function signUp({
  email,
  password,
  firstname,
  lastname,
  country,
  city,
}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email,password,firstname,lastname,country,city}),
  };

  console.log(requestOptions);
  const response = await fetch(
    "http://localhost:4000/user/signup",
    requestOptions
  );
  const body = await response.json();
  return body;
}
