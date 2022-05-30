import React from "react";
import {SafeAreaView, Text} from 'react-native';

const LoginScreen = () => {
    return (
        <SafeAreaView
            style= {{
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
            <Text>LoginScreen</Text>
        </SafeAreaView>
    );
};

export default LoginScreen;