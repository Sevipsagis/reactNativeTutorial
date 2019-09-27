import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

class Card extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => Actions.edit({ operator: this.props.operator, onRight: () => this.props.onDelete(this.props.operator.id) })} style={style.cardProps}>
                <Image source={{ uri: `http://localhost:9999/public/logo/${this.props.operator.name}.png`, width: 120, height: 120 }} />
                <Text>
                    <Text style={{ color: "white", fontWeight: '700', fontSize: 16 }}>{this.props.operator.name}</Text>{'\n'}
                    <Text style={{ color: "white", fontWeight: '400', fontSize: 14 }}>Armor : {this.props.operator.armor}</Text>{'\n'}
                    <Text style={{ color: "white", fontWeight: '400', fontSize: 14 }}>Speed : {this.props.operator.speed}</Text>
                </Text>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    cardProps: {
        width: '100%',
        height: 116,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Card;