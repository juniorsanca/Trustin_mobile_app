import React from "react";
import {
    Text,
    View,
} from 'react-native';

const Card = ({color, width, aspectratio}) => {
    return (
        <View 
            style={{
                    backgroundColor: color,
                    width:width,
                    height:width*aspectratio,
                    marginBottom: 10,
                    borderRadius: 10,
                }}
        />
    )
}

export default Card