import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity } from 'react-native';

export default class ButtonGroup extends Component {

    constructor(props) {
        super(props);
        this.state = { activeButton: 0 }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.topPick()}><Text style={styles.btgItem}>Top Pick</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.topBan()}><Text style={styles.btgItem}>Top Ban</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.topAtk()}><Text style={styles.btgItem}>Top Atk</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.topDef()}><Text style={styles.btgItem}>Top Def</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 12,     
    },
    btgItem: {
        marginLeft: 6,
        marginRight: 6,
        color: 'white',
        backgroundColor: '#007BFF',
        fontWeight: '500',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 10
    }
})