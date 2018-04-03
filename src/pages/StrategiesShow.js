import React from 'react';
import StatsList from 'components/StatsList';
import Stat from 'components/Stat';
import Typography from 'material-ui/Typography';
import Patterns from 'components/Patterns';
import Grid from 'material-ui/Grid';

const StrategiesShow = () => (
  <div>
    <Grid container spacing={16}>
      <Grid item xs={12} lg={9}>
        <Typography>GEWINN FUTURES AGGRESIV</Typography>
        <Stat />
        <Stat />
        <Stat />
        <Stat />
        <Stat />
        <Stat />
        <Typography>
          Hypothetical Monthly Returnds (includes system fee and Typical Broken
          commissions and fees)
        </Typography>
        <Patterns />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Typography>SUMMARY STATISTICS</Typography>
        <StatsList />
      </Grid>
    </Grid>
  </div>
);

export default StrategiesShow;
