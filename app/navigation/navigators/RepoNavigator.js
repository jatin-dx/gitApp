import { createMaterialTopTabNavigator, NavigationActions } from 'react-navigation';
import RepoRoutes from '../routes/RepoRoutes';

const RepoNavigator = createMaterialTopTabNavigator(RepoRoutes, {
  initialRouteName: 'Repositories',
  swipeEnabled: false,
  tabBarOptions: {
    scrollEnabled: true,
    style: {
      backgroundColor: '#24292d',
    },
    tabStyle: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flex: '0 1 auto',
      backgroundColor: '#24292d',
    }
  }
});

const defaultGetStateForAction = RepoNavigator.router.getStateForAction;

RepoNavigator.router.getStateForAction = (action, state) => {
  if ((action.type === NavigationActions.NAVIGATE) &&
     (action.routeName !== 'Repositories')) {
    return null;
  }

  return defaultGetStateForAction(action, state);
};

export default RepoNavigator;