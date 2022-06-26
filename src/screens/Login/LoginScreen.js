import React, {useState} from "react";
import {
    Text,
    View,
    Dimensions,
    StyleSheet, 
    TextInput,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginInput from "../components/LoginInput";

const {width, height} = Dimensions.get('window');

const START_DEFAULT = { x: 0.5, y: 0 };
const END_DEFAULT = { x: 0.5, y: 1 };
const GRADIENT_COLORS = ["#F5A64F", "#F07754", "#CA4171"];
const GRADIENT_LOCATIONS = [0, 0.3, 0.9, 0.7, 0.8, 1, 1];



const LoginScreen = ({navigation}) => {

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleLoginClick = () => {

    }
    
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
                                {'Bienvenue 👋'}
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

             

            {/*--------[DEBUT LOGIN IN COMPONENT]--------*/}
            <View style={{marginTop: 45}}>

                    <LoginInput 
                        placeholder="Adresse email"
                        value={emailField}
                        onChangeText={t=>setEmailField(t)}
                        />
                    <LoginInput 
                        placeholder="Mot de passe"
                        value={passwordField}
                        onChangeText={t=>setPasswordField(t)}
                        password={true}
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
                                    onPress={handleLoginClick}>
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
                            <Text> {'Vous n\'avez pas de compte ?'} 
                            <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                            <Text style={{
                                fontWeight: 'bold',
                                color:'#FFF',
                                }}
                                > S'inscrire</Text>
                                </TouchableOpacity>
                            </Text>
                        </Text>
                    </Text>
                </View>

            </LinearGradient>
        </View>
    );
};


const styles = StyleSheet.create({
    InputArea: {
        backgroundColor: "red"
    },
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