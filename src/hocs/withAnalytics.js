import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default () => Composed =>
  function(props) {
    useEffect(() => {
      ReactGA.initialize('ID');
      ReactGA.pageview(window.location.pathname);
    }, []);

    return <Composed {...props} />;
  };