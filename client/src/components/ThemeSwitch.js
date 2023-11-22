// ThemeSwitch.js

import React, { useState } from 'react';
import { Switch, withStyles } from '@material-ui/core';

const ThemeSwitch = ({ onThemeChange }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!isDarkMode);
    onThemeChange(!isDarkMode ? 'dark' : 'light');
  };

  const SwitchWithStyles = withStyles({
    switchBase: {
      color: isDarkMode ? '#fff' : '#000',
      '&$checked': {
        color: isDarkMode ? '#fff' : '#000',
      },
      '&$checked + $track': {
        backgroundColor: isDarkMode ? '#333' : '#ddd',
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '8px', color: isDarkMode ? '#FFFFFF' : '#000000' }}>Light</span>
      <SwitchWithStyles
        checked={isDarkMode}
        onChange={handleChange}
        style={{ color: isDarkMode ? 'white' : '#2196F3' }} // Blue in dark mode, orange in light mode
      />
      <span style={{ marginRight: '8px', color: isDarkMode ? '#FFFFFF' : '#000000' }}>Dark</span>
    </div>
  );



};

export default ThemeSwitch;
