import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class InputField extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    style={styles.textField}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.defaultValue}
                    onChangeText={text => { this.props.onHandleUpdate({ prop: this.props.field, value: text }) }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 8
    },
    label: {
        color: '#007BFF',
        marginLeft: 8,
        fontWeight: '700'
    },
    textField: {
        backgroundColor: 'white',
        height: 40,
        fontSize: 16,
        marginTop: 8,
        paddingLeft: 16,
        borderRadius: 20
    }
});