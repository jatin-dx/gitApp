import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Routes from './routes/RootRoutes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

const Navigator = createDrawerNavigator(Routes);

export default class MainNavigator extends React.Component {

  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#24292d', padding: 10, alignItems: 'center' }}>
          <TouchableOpacity onPress={ () => navigation.toggleDrawer()}>
            <Icon name="bars" color="#fff" size={25}/>
          </TouchableOpacity>
          <Octicons name="mark-github" size={25} color="#fff"/>
          <Octicons name="bell" size={20} color="#fff"/>
        </View>
        <View style={{ flex: 1 }}>
          <Navigator
            navigation={navigation}
          />
        </View>
      </View>
    );
  }
}

