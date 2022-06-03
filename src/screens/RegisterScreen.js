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



const RegisterScreen = ({navigation}) => {
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

                <View style={{marginTop: 45}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom d'utilisateur *"
                        //value=""
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom de l'entreprise"
                        //value=""
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Numéro de téléphone"
                        //value=""
                    />
                </View>

                <View style={{marginTop: 10}}>
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



                <View style={{marginTop: 20}}>
                        <View style={{height: 55}}>
                            <TouchableOpacity style={[styles.btn2]} onPress={() => navigation.replace('HomeScreen')}>
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
                        <Text style={{fontWeight: 'bold', color:'#FFF'}}> Connexion</Text>
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