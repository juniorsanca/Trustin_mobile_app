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

const RegisterScreen = ({navigation}) => {


const [nameField, setNameField] = useState('');
const [phoneField, setPhoneField] = useState('');
const [emailField, setEmailField] = useState('');
const [passwordField, setPasswordField] = useState('');

const handleRegisterClick = () => {
        
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

                <View style={{marginTop: 80}}>
                        <Text style={[styles.title]} >Trust<Text style={{fontWeight: 'bold', color:'#CA4171'}}>{'in'}</Text></Text>
                </View>

                       {/*--------[DEBUT REGISTER IN COMPONENT]--------*/}
                <View style={{marginTop: 45}}>

                    <LoginInput 
                        placeholder="NOM Prénom *"
                        value={nameField}
                        onChangeText={t=>setNameField(t)}
                    />
                    <LoginInput 
                        placeholder="Numéro de télépone *"
                        value={phoneField}
                        onChangeText={t=>setPhoneField(t)}
                    />
                    <LoginInput 
                        placeholder="Adresse email *"
                        value={emailField}
                        onChangeText={t=>setEmailField(t)}
                    />
                    <LoginInput 
                        placeholder="Mot de passe *"
                        value={passwordField}
                        onChangeText={t=>setPasswordField(t)}
                        password={true}
                        />                
                </View>

                <View style={{marginTop: 20}}>
                        <View style={{height: 55}}>
                            <TouchableOpacity onPress={handleRegisterClick} style={[styles.btn2]} >
                                <Text style={{
                                    fontWeight: 'bold', 
                                    fontSize: 15, 
                                    color: '#fff'}}>
                                    Créer un compte gratuit
                                </Text>
                            </TouchableOpacity>
                        </View> 
                </View>
            
                <Text style={[styles.haveAccount]} >
                    <Text> {'Vous avez déjà un compte ?'} 
                        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                            <Text style={{fontWeight: 'bold', color:'#FFF'}}> Connexion</Text>
                        </TouchableOpacity>
                    </Text>
                </Text>

                <View style= {{ flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text>                   
                        <Text>   
                            <Text style={[styles.terms]} >
                                <Text> 
                                    {'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée'} 
                                </Text>
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
    haveAccount: {
        color:'#fff',
        marginTop: 25,
        textAlign: "center",

    },

    terms: {
        color:'#fff',
        textAlign: "center",
    },

    input: {
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30,
      },
      input2: {
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
    checkbox: {
        alignSelf: "center",
      },

      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        margin: 35
      },
      label: {
        margin: 8,
        color: '#fff'
      },
});

export default RegisterScreen;