import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';

const useStyles = makeStyles({
  root: {
    position:'fixed',
    height:50,
    bottom:0,
    left:0,
    right:0,
  },
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();
  console.log(screenConfig[0])
  //const [value, setValue] = React.useState(0);

  return (
     
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
          console.log(newValue);
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<PublicOutlinedIcon />} />
      <BottomNavigationAction label="Country Stats" icon={<TrendingUpOutlinedIcon />} />
      <BottomNavigationAction label="Graph" icon={<PieChartOutlinedIcon />} />
    </BottomNavigation>
  );
}
