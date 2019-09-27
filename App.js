import React, { Component } from 'react';
import { YellowBox, StyleSheet, Image } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import DashboardScreen from './src/components/screens/DashboardScreen';
import OperatorsScreen from './src/components/screens/OperatorsScreen';
import AddOperators from './src/components/screens/AddOperators';
import UpdateOperators from './src/components/screens/UpdateOperators';
import TabIcon from './src/components/TabIcon';
import reducers from './src/reducers';


YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

class App extends Component {
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const scenes = Actions.create(
      <Scene
        key="main"
        navigationBarTitleImage={require('./src/assets/pngkey.com-rainbow-six-siege-logo-134102.png')}
        navigationBarTitleImageStyle={styles.logoTitle}
        navigationBarStyle={styles.backgroundBlack}>
        <Scene
          key="root"
          hideNavBar
          onRight={() => Actions.push("add")}
          rightTitle="Add"
          tabs
          tabBarStyle={styles.backgroundBlack}>
          <Scene key="dashboard" component={DashboardScreen} title="dashboard" icon={TabIcon} tabBarLabel="Dashboard" />
          <Scene key="operators" component={OperatorsScreen} title="operators" icon={TabIcon} tabBarLabel="Operators" />
        </Scene>
        <Scene key="edit" component={UpdateOperators} backTitle="back" onRight={() => {}} rightTitle="Delete"/>
        <Scene key="add" component={AddOperators} backTitle="back" />
      </Scene>
    );

    const ConnectedRouter = connect()(Router);

    return (
      <Provider store={store}>
        <ConnectedRouter scenes={scenes} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  logoTitle: {
    width: '55%',
    height: '55%',
    overflow: 'visible',
  },
  // logoWithTitle: {
  //   width: '55%',
  //   height: '55%',
  //   overflow: 'visible',
  // },
  backgroundBlack: {
    color: "white",
    backgroundColor: '#000',
  }
});

export default App;
