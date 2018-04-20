import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

function Strategy({
  accessLevel,
  name,
  returnLast6MonthsPercent,
  bottomChartLabel
}) {
  const strategy = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [
        {
          data: [
            100,
            105,
            97,
            108,
            110,
            120,
            130,
            115,
            160,
            170,
            140,
            150,
            160,
            170,
            175,
            180
          ],
          radius: 0,
          backgroundColor: '#bf88c4',
          borderColor: '#bf88c4'
        }
      ]
    }
  };
  return (
    <div className="Strategy">
      <Link to={`/strategies/${4}`}>
        {/* <Paper> */}
        <div className="under">
          <Line
            data={strategy.chartData}
            height={200}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <div className="Strategy_over">
          {/* <span className="rmhi">RMHI</span> */}
          <div className="access expert">expert</div>
          {/* <div className="name">Optimized Partners</div> */}
          {/* <div className="percent">36.5 %</div> */}
          {/* <small className="subline">Annual Returns since Oct 20, 2017</small> */}
        </div>
        {/* </Paper> */}
      </Link>
    </div>
  );
}

// Strategy.propTypes = {
//   strategy: PropTypes.object.isRequired
// };

export default Strategy;
