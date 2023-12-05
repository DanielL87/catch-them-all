export default async function Memes() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const info = await res.json();
  const memes = info.data.memes;

  return (
    <div>
      <h3>memes</h3>
      <p>
        Here's an API to fetch random memes:{" "}
        <a href="https://api.imgflip.com/get_memes">
          https://api.imgflip.com/get_memes
        </a>
      </p>
      {memes.map((meme) => (
        <img key={meme.id} className="meme-images" src={meme.url} alt="" />
      ))}
      <hr />
    </div>
  );
}
