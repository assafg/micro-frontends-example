import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../theme-default';
import LoginPageContent from 'login-page';

const LoginPage = () => {
  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <LoginPageContent />
    </MuiThemeProvider>
  );
};

export default LoginPage;
