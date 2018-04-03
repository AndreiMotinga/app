import React from 'react';
import './Tile.css';
import Paper from 'material-ui/Paper';

function Tile() {
  return (
    <div className="Tile">
      <div className="Tile_num">117.4 %</div>
      <div className="Tile_subline">Anual Return (Compaunded)</div>
    </div>
  );
}

export default Tile;
