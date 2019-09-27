import React, { Component, Fragment } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ImageBackground, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { updateOperator, createOperator } from '../../actions'

import Form from '../forms/Form';

class AddOperators extends Component {

    constructor(props) {
        super(props);
    }

    onSubmit(){
        this.props.createOperator(this.props.operatorsForm);
    }


    render() {
        return (
            <Fragment>
                <StatusBar barStyle="light-content" />
                <ImageBackground
                    source={require('../../assets/138652-amazing-rainbow-six-siege-background-1920x1080.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <SafeAreaView>
                        <View style={styles.container}>
                            <Text style={styles.header}>Create Operators</Text>
                            <Form style={styles.form} handleUpdate={this.props.updateOperator} operator={this.props.operatorsForm} submit={this.onSubmit.bind(this)} />
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { operatorsForm: state.operatorsForm }
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    header: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 16
    }
});

export default connect(mapStateToProps, { updateOperator, createOperator })(AddOperators);
