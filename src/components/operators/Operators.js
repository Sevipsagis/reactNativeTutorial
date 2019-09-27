import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

class Operators extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity onPress={() => Actions.edit({operator: this.props.operator, onRight: () => this.props.onDelete(this.props.operator.id) })} style={{ width: "50%", aspectRatio: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: `http://localhost:9999/public/logo/${this.props.operator.name}.png`, width: 180, height: 180 }} onError={(e) => { this.props.source = { uri: 'http://localhost:9999/public/logo/recruit.png', width: 180, height: 180}}}/>
                <View style={{ marginTop: -10 }}>
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "700" }}>{this.props.operator.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Operators;