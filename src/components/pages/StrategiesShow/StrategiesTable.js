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

const data = [
  [
    '2015',
    'null',
    'null',
    'null',
    'null',
    'null',
    'null',
    0,
    3,
    10,
    4.3,
    -5.6,
    9,
    9
  ],
  ['2016', 0, 0, 0, 0, 1.7, -0.5, 2, 3, 10, 4.3, -5.6, 9, 9],
  ['2017', 0, 0, 0, 4, 1.7, -0.5, 2, 3, 10, 4.3, -5.6, 9, 9],
  ['2018', -4.5, -2.1, 1.0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
  'YTD'
];

function StrategiesTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            {months.map((m, i) => (
              <TableCell key={i} numeric padding="checkbox">
                {m}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(arr => (
            <TableRow key={arr[0]}>
              {arr.map((n, i) => (
                <TableCell
                  key={i}
                  padding="checkbox"
                  numeric
                  style={{ maxWidth: 0 }}
                >
                  {n}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

StrategiesTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

export default withStyles(styles)(StrategiesTable);
