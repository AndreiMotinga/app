import React from 'react';
import StatsList from 'components/StatsList';
import Tiles from 'components/Tiles';
import Typography from 'material-ui/Typography';
import StrategiesShowTable from 'components/StrategiesShowTable';
import Grid from 'material-ui/Grid';
import BigButton from 'components/BigButton';

const StrategiesShow = () => (
  <div>
    <Grid container spacing={16}>
      <Grid item xs={12} lg={9}>
        <Typography>GEWINN FUTURES AGGRESIV</Typography>
        <Tiles />

        <Typography>
          Hypothetical Monthly Returnds (includes system fee and Typical Broken
          commissions and fees)
        </Typography>
        <StrategiesShowTable />
      </Grid>
      <Grid item xs={12} lg={3}>
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

export default StrategiesShow;
