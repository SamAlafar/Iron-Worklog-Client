import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';

function AnonRoute(props) {
  const { isLoggedIn, isLoading } = props;

  const ComponentToShow = props.component;
  const { exact, path, redirectPath = '/dashboard' } = props;

  if (isLoading) return 'Loading';

  return (
    <Route
      exact={exact}
      path={path}
      render={function (props) {
        if (isLoggedIn) return <Redirect to={redirectPath} />;
        else if (!isLoggededIn) return <ComponentToShow {...props} />;
      }}
    />
  );
}

export default withAuth(AnonRoute);
