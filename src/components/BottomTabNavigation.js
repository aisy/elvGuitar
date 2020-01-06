import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';

const BottomTabNavigation = ({ navigation }) => {

  const onSelect = (index) => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  }

  // icon
  const HomeIcon = (style) => (
    <Icon {...style} name='home-outline' />
  );

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect} appearance={"noIndicator"}>
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Search" />
      </BottomNavigation>
    </SafeAreaView>
  )
}

export default BottomTabNavigation
