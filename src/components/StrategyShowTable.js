import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const data: {
  "2015": ["null", "null", "null", "null", "null", "null", 0, 3, 10, 4.3, -5.6, 9, 9],
  "2016": [0, 0, 0, 0, 1.7, -0.5, 2, 3, 10, 4.3, -5.6, 9, 9],
  "2017": [0, 0, 0, 4, 1.7, -0.5, 2, 3, 10, 4.3, -5.6, 9, 9],
  "2018": [-4.5, -2.1, 1.0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

function StrategiesShowTable(props) {
  const { classes } = props;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'YTD']

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Last Trade Date</TableCell>
            <TableCell numeric>Last Trade Perf.</TableCell>
            <TableCell numeric>Signal for 4/3/2018</TableCell>
            <TableCell numeric>Expected Profit</TableCell>
            <TableCell numeric>Hold Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.date}</TableCell>
                <TableCell numeric>{n.lastTrade}</TableCell>
                <TableCell numeric>{n.signal}</TableCell>
                <TableCell numeric>{n.expected}</TableCell>
                <TableCell numeric>{n.hold}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

StrategiesShowTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

export default withStyles(styles)(StrategiesShowTable);
