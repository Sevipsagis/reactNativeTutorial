import React, {Component, Fragment} from 'react';
import {Button, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import InputField from './InputField';

export default class Form extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <Fragment>
                <InputField label="Operators Name" field="name" onHandleUpdate={this.props.handleUpdate} placeholder={this.props.placeholder ? this.props.placeholder.name : "Type your operator name"} data={this.props.operator.name} defaultValue={this.props.placeholder ? this.props.placeholder.name : null} />
                <InputField label="Operators Armor" field="armor" onHandleUpdate={this.props.handleUpdate} placeholder={this.props.placeholder ? this.props.placeholder.armor.toString() : "Type your operator armor"} data={this.props.operator.armor} defaultValue={this.props.placeholder ? this.props.placeholder.armor.toString() : null} />
                <InputField label="Operators Speed" field="speed" onHandleUpdate={this.props.handleUpdate} placeholder={this.props.placeholder ? this.props.placeholder.speed.toString() : "Type your operator speed"} data={this.props.operator.speed} defaultValue={this.props.placeholder ? this.props.placeholder.speed.toString() : null} />
                {/* <Button style={styles.button} title="submit" onPress={() => this.props.submit()}/> */}
                <View style={styles.container}><TouchableOpacity style={styles.button} onPress={() => this.props.submit()}><Text style={{color: '#FFF', fontWeight: '600', fontSize: 15}}>Submit</Text></TouchableOpacity></View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 16,
        backgroundColor: "#007BFF",
        height: 40,
        borderRadius: 5,
        width: "40%",
        justifyContent: 'center',
        alignItems: 'center',
    }
});