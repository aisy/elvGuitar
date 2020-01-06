import React from 'react';
import { StyleSheet, View } from 'react-native'
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

  const SearchIcon = (style) => (
    <Icon {...style} name='search-outline' />
  );

  const UserIcon = (style) => (
    <Icon {...style} name='person-outline' />
  );

  return (
    <SafeAreaView style={styles.container}>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect} appearance={"noIndicator"} >
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Search" icon={SearchIcon} />
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Search" icon={UserIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }
})

export default BottomTabNavigation
