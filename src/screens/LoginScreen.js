import React from "react";
import {
    Text,
    View,
    Dimensions,
    StyleSheet, 
    TextInput,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = { x: 0.5, y: 0 };
const END_DEFAULT = { x: 0.5, y: 1 };
const GRADIENT_COLORS = ["#F5A64F", "#F07754", "#CA4171"];
const GRADIENT_LOCATIONS = [0, 0.3, 0.9, 0.7, 0.8, 1, 1];



const LoginScreen = ({navigation}) => {
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

                <View style={{marginTop: 130}}>
                        <Text style={[styles.title]} >Trust<Text style={{fontWeight: 'bold', color:'#CA4171'}}>{'in'}</Text></Text>
                </View>
                
                <View style={{marginTop: 65}}>
                        <Text style={[styles.hello]} >
                            <Text style={{
                                fontWeight: 'bold',
                                borderWidth:1,
                                borderColor:'#fff', 
                                color:'#fff',
                                }}>
                                {'SE CONNECTER'}
                            </Text>
                        </Text>
                </View>

                <View style={{marginTop: 5}}>
                        <Text style={[styles.welcome]} >
                            <Text>
                                {'Connectez-vous à votre compte'}
                            </Text>
                        </Text>
                </View>

                <View style={{marginTop: 45}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adresse email"
                        //value=""
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <TextInput style={styles.input2}
                            placeholder="Mot de passe"
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}
                    />
                </View>

                <View style={{marginTop: 10}}>
                        <Text style={[styles.forgotPassword]} >
                            <Text>
                                {'Mot de passe oublié ?'}
                            </Text>
                        </Text>
                </View>

                <View style={{marginTop: 20}}>
                        <View style={{height: 55}}>
                            <TouchableOpacity 
                                style={[styles.btn2]} 
                                onPress={() => navigation.replace('')}>
                                <Text style={{
                                    fontWeight: 'bold', 
                                    fontSize: 18, 
                                    color: '#fff'}}>
                                    Connexion
                                </Text>
                            </TouchableOpacity>
                        </View> 
                </View>

                <View
                    style= {{
                            flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}>
                    <Text>   
                        <Text style={[styles.welcome]} >
                            <Text> {'Vous n\'avez pas de compte ?'} <Text style={{
                                fontWeight: 'bold',
                                color:'#FFF',
                                }}
                                > S'inscrire</Text>
                            </Text>
                        </Text>
                    </Text>
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
        marginLeft: 0,
        textAlign: 'center'
    },
    hello: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 0,
    },
    welcome: {
        color:'#fff',
    },
    input: {
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30,
        borderWidth:2,
        borderColor:'lightgrey',
      },
      input2: {
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30,
        borderWidth:2,
        borderColor:'lightgrey',
      },
      forgotPassword: {
          marginTop: 9,
          color: '#fff',
          textAlign: 'right'
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

export default LoginScreen;