import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Operators from './Operators';

export default class OperatorsList extends Component{

    showOperators(operators){
        return operators.map(op => {
            return <Operators key={op.id} operator={op} name={"react"} onDelete={this.props.onDelete} />
        })
    }
     
    render(){
        return(
            <View style={style.container}>
                {this.showOperators(this.props.operators)}
            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        marginBottom: 24
    }
});