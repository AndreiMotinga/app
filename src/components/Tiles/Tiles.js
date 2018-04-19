import React from 'react';

const Tile = () => (
  <div className="Tile">
    <div className="Tile_num">117.4 %</div>
    <div className="Tile_subline">Anual Return (Compaunded)</div>
  </div>
);

function Tiles() {
  return (
    <div className="Tiles">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
}

export default Tiles;
