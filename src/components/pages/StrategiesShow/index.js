import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Line } from 'react-chartjs-2';

import StatsList from './StatsList';
import StrategiesTable from './StrategiesTable';
import BigButton from './BigButton';
import Tiles from './Tiles';

const StrategiesShow = () => {
  const strategy = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
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
    <div>
      <Grid container spacing={16}>
        <Grid item xs={12} lg={9}>
          <Typography>GEWINN FUTURES AGGRESIV</Typography>
          <Tiles />
          <Typography>
            Hypothetical Monthly Returnds (includes system fee and Typical
            Broken commissions and fees)
          </Typography>
          <StrategiesTable />

          <Line data={strategy.chartData} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <BigButton
            action="simulate"
            actionText="SIMULATE THIS"
            subline="Track at simulated broker"
          />
          <BigButton
            action="subscribe"
            actionText="SUBSCRIBE"
            subline="Full access for 149.00/month"
          />
          <Typography>SUMMARY STATISTICS</Typography>
          <StatsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default StrategiesShow;
