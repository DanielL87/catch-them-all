export default async function Dogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const info = await res.json();
  const dogs = info.message;

  return (
    <div>
      <h3>Dogs</h3>
      <p>
        Here's an API to fetch 10 random dog images:
        <a href="https://dog.ceo/api/breeds/image/random/10">
          https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>
      <div id="dog-container">
        {dogs.map((dog, index) => (
          <img key={index} className="dog-images" src={dog} alt="" />
        ))}
      </div>
      <hr />
    </div>
  );
}
