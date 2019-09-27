import React from 'react';
import { Image } from 'react-native';

class TabIcon extends React.Component {
    render() {

        var imgURL;

        switch (this.props.title) {
            case "dashboard":
                imgURL = this.props.focused ? require('../assets/icon/active/dashboard.png') : require('../assets/icon/inactive/dashboard.png');
                break;
            case "operators":
                imgURL = this.props.focused ? require('../assets/icon/active/operators.png') : require('../assets/icon/inactive/operators.png');
                break;
        }

        return (
            <Image source={imgURL} style={{ width: "10%", height: "10%", overflow: "visible" }} />
        );
    }
}

export default TabIcon;