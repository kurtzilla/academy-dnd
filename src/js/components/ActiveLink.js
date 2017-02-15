import React from 'react';
import { Route, Link } from 'react-router-dom';

// spread the props - whatever is declared last wins!
const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

export default ActiveLink;