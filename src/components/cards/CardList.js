import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Card';

export default class CardList extends Component{

    showCard(operators){
        return operators.map(op => {
            return <Card key={op.id} operator={op} onDelete={this.props.onDelete} />
        })
    }
     
    render(){
        return(
            <View style={style.container}>
                {this.showCard(this.props.operators)}
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%"
    }
});