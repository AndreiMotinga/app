import React from 'react';
import './Stat.css';
import Paper from 'material-ui/Paper';

function Stat() {
  return (
    <div className="Stat">
      <Paper>
        <div className="Stat_num">117.4 %</div>
        <div className="Stat_subline">Anual Return (Compaunded)</div>
      </Paper>
    </div>
  );
}

export default Stat;
