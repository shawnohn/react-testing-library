export function NotFound({ path }: { path: string }) {
  return (
    <>
      <h2>Page Not Found</h2>
      <p>The Page ({path}) Not Found.</p>
      <img
        alt="404"
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
      />
    </>
  );
}
