import React from 'react';
import { Repos } from '../../screens/';

const BlankComponent = () => null;

const Routes = {
  Overview: {
    screen: BlankComponent,
  },
  Repositories: {
    screen: Repos
  },
  Stars: {
    screen: BlankComponent,
  },
  Following: {
    screen: BlankComponent,
  },
}

export default Routes;