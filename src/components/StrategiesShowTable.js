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

function StrategiesShowTable(props) {
  const { classes } = props;
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

  return (
    <Paper>
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            {months.map(m => (
              <TableCell padding="checkbox" numeric>
                {m}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(arr => (
            <TableRow key={arr[0]}>
              {arr.map((n, i) => (
                <TableCell key={i} padding="checkbox" numeric>
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

StrategiesShowTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    overflowX: 'auto'
  }
});

export default withStyles(styles)(StrategiesShowTable);
