import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { StatusBar, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { getTopPick, getTopBan, getTopATK, getTopDEF, deleteOperator } from '../../actions';

import ButtonGroup from '../ButtonGroup';
import CardList from '../cards/CardList';

class DashboardScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.getTopPick();
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ImageBackground
            source={require('../../assets/138652-amazing-rainbow-six-siege-background-1920x1080.jpg')}
            style={{ width: '100%', height: '100%' }}>
            <ButtonGroup topPick={this.props.getTopPick} topBan={this.props.getTopBan} topAtk={this.props.getTopATK} topDef={this.props.getTopDEF} />
            <ScrollView>
              <CardList operators={this.props.dashboard} onDelete={this.props.deleteOperator} />
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ dashboard }) => {
  console.log(dashboard);
  return { dashboard };
}


export default connect(mapStateToProps, { getTopPick, getTopBan, getTopATK, getTopDEF, deleteOperator })(DashboardScreen);
