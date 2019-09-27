import React, { Component, Fragment } from 'react';
import { StatusBar, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getOperators, deleteOperator } from '../../actions'

import OperatorsList from '../operators/OperatorsList';

class OperatorsScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOperators();
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ImageBackground
            source={require('../../assets/138652-amazing-rainbow-six-siege-background-1920x1080.jpg')}
            style={{ width: '100%', height: '100%' }}>
            <ScrollView>
              <OperatorsList operators={this.props.operators} onDelete={this.props.deleteOperator} />
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const mapStateToProps = ({operators}) => {
  if (operators) {
    return { operators }
  }

}

export default connect(mapStateToProps, { getOperators, deleteOperator })(OperatorsScreen);
