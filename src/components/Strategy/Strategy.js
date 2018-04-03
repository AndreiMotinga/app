import React from 'react';
// import PropTypes from 'prop-types';
import './Strategy.css';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

function Strategy({
  accessLevel,
  name,
  returnLast6MonthsPercent,
  bottomChartLabel
}) {
  return (
    <div className="Strategy">
      <Link to={`/strategies/${4}`}>
        <Paper>
          <div className="under">
            <canvas />
          </div>
          <div className="Strategy_over">
            <span className="rmhi">RMHI</span>
            <div className="pull-right access expert">expert</div>
            <div className="name">Optimized Partners</div>
            <div className="percent">36.5 %</div>
            <small className="subline">Annual Returns since Oct 20, 2017</small>
          </div>
        </Paper>
      </Link>
    </div>
  );
}

// Strategy.propTypes = {
//   strategy: PropTypes.object.isRequired
// };

export default Strategy;
