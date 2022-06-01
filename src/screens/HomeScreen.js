import React from "react";
import {
    Text, 
    View,
    StyleSheet, 
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = { x: 0.5, y: 0 };
const END_DEFAULT = { x: 0.5, y: 1 };
const GRADIENT_COLORS = ["#F5A64F", "#F07754", "#CA4171"];
const GRADIENT_LOCATIONS = [0, 0.3, 0.9, 0.7, 0.8, 1, 1];


const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <LinearGradient 
                style={{
                    height: height, 
                    justifyContent: 'space-between',
                    paddingHorizontal: 50,
                }}
                colors= {GRADIENT_COLORS}
                locations= {GRADIENT_LOCATIONS}
                start= {START_DEFAULT}
                end= {END_DEFAULT}
                >
    
    <View style={{marginTop: 235}}>
        <View style={{height: 0}}></View>
            <Text style={[styles.title]} >Trust<Text style={{fontWeight: 'bold', color:'#CA4171'}}>{'in'}</Text></Text>
        </View>

            <View style={{marginTop: 55}}>
                <View style={{height: 60}}>
                    <TouchableOpacity 
                        style={[styles.btn]} 
                        onPress={() => navigation.replace('LoginScreen')}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>
                            SE CONNECTER
                        </Text>
                    </TouchableOpacity>
                </View> 
            </View> 

            <View style={{marginBottom: 330}}>
                <View style={{height: 60}}>
                    <TouchableOpacity 
                        style={[styles.btn2]} 
                        onPress={() => navigation.replace('')}>
                        <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
                            CREATE NEW ACCOUNT
                        </Text>
                    </TouchableOpacity>
                </View> 
            </View>

        </LinearGradient>
    </View> 

    );
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        height: 0,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn2: {
        flex: 1,
        height: 0,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius: 50,
        backgroundColor: '#CA4171',
        justifyContent: 'center',
        alignItems: 'center',

    },
});
export default HomeScreen;