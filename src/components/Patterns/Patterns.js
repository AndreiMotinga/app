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

let id = 0;
function createData(name, date, lastTrade, signal, expected, hold) {
  id += 1;
  return { id, name, date, lastTrade, signal, expected, hold };
}

const data = [
  createData('2 up days', '4/3/2018', '-1.5%', 'YES', '', '12 hours'),
  createData('4 up days', '4/3/2018', '-1.5%', 'YES', '', '12 hours'),
  createData('3 down days', '4/3/2018', '-4.5%', 'YES', '', '12 hours')
];

function Patterns(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Trend</TableCell>
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

Patterns.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Patterns);
