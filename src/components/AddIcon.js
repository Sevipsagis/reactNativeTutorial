import React, {Component} from 'react';
import {Button} from 'react-native';
import {Actions} from "react-native-router-flux"

export default class AddIcon extends Component{
    render(){
        return <Button style={{color: 'red'}} title="add" onPress={() => Actions.add()}/>;
    }
}