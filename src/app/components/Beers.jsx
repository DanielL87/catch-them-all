"use client";

import { useEffect, useState } from "react";

export default function Beers() {
  const [beersArray, setBeersArray] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState({});

  async function fetchBeers() {
    const res = await fetch(`https://random-data-api.com/api/v2/beers?size=20`);
    const info = await res.json();

    setBeersArray(info);
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  const handleSelectChange = (event) => {
    const selectedBeerId = event.target.value;
    const beer = beersArray.find((b) => b.id === +selectedBeerId);
    setSelectedBeer(beer || {});
  };

  return (
    <div>
      <h3>Beers</h3>
      <p>
        Here's an API to fetch 20 beers:
        <a href="https://random-data-api.com/api/v2/beers?size=20">
          https://random-data-api.com/api/v2/beers?size=20
        </a>
      </p>
      <p>Choose your favorite one to see its details.</p>
      <select name="beerSelect" id="beerSelect" onChange={handleSelectChange}>
        <option value="">Pick a beer</option>
        {beersArray.map((beer) => (
          <option key={beer.id} value={beer.id}>
            {beer.name}
          </option>
        ))}
      </select>
      <div>
        {selectedBeer.id && (
          <div>
            <h4>Selected Beer Details</h4>
            <table>
              <tbody>
                <tr className="column">
                  <td className="value-row">ID:</td>
                  <td>{selectedBeer.id}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Uid:</td>
                  <td>{selectedBeer.uid}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Brand:</td>
                  <td>{selectedBeer.brand}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Name:</td>
                  <td>{selectedBeer.name}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Style:</td>
                  <td>{selectedBeer.style}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Hop:</td>
                  <td>{selectedBeer.hop}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Yeast:</td>
                  <td>{selectedBeer.yeast}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Malts:</td>
                  <td>{selectedBeer.malts}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Ibu:</td>
                  <td>{selectedBeer.ibu}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Alcohol:</td>
                  <td>{selectedBeer.alcohol}</td>
                </tr>
                <tr className="column">
                  <td className="value-row">Blg:</td>
                  <td>{selectedBeer.blg}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
