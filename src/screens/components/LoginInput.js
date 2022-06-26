import React from "react";


import {
    StyleSheet, 
    Input,
    TextInput,
    placeholder
} from 'react-native';

const LoginInput = ({placeholder, value, onChangeText, password}) => {
    return ( 
        <TextInput  
            placeholder={placeholder} 
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
            />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        marginBottom: 7,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30,
      },
});

export default LoginInput;