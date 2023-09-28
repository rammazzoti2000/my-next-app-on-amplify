const fetFormattedDate = async () => {
  const resp = await fetch('http://localhost:3000/api/ssr')

  return resp.json()
}

export default async function SSR() {
  const formattedDate = await fetFormattedDate()

  return (
    <>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <p>
        <a href="/">View a static page.</a>
      </p>
    </>
  );
}
