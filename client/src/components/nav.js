import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Devices, LocalHospital, Movie, Public, SettingsApplications, SportsBasketball, Work } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 9999,
    backgroundColor: theme.palette.primary.main, // Use your theme's primary color
  },
  action: {
    color: theme.palette.common.white, // Use your theme's text color
    "&$selected": {
      color: theme.palette.secondary.main, // Use your theme's secondary color for selected
    },
  },
  selected: {},
}));

const Navbar = ({ onCategoryChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('general');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onCategoryChange(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      showLabels // Display labels
    >
      <BottomNavigationAction label="General" value="general" icon={<Public />} className={classes.action} classes={{ selected: classes.selected }} />
      <BottomNavigationAction label="Business" value="business" icon={<Work />} className={classes.action} classes={{ selected: classes.selected }} />
      <BottomNavigationAction label="Entertainment" value="entertainment" icon={<Movie />} className={classes.action} classes={{ selected: classes.selected }} />
      <BottomNavigationAction label="Health" value="health" icon={<LocalHospital />} className={classes.action} classes={{ selected: classes.selected }} />
      <BottomNavigationAction label="Science" value="science" icon={<SettingsApplications />} className={classes.action} classes={{ selected: classes.selected }} />
      <BottomNavigationAction label="Sports" value="sports" icon={<SportsBasketball />} className={classes.action} classes={{ selected: classes.selected }} />
      <BottomNavigationAction label="Technology" value="technology" icon={<Devices />} className={classes.action} classes={{ selected: classes.selected }} />
    </BottomNavigation>
  );
};

export default Navbar;
