import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View, Alert, Platform } from 'react-native';
import fundoHayley from '../../../assets/fundoHayley.jpg';
import styles from './styles';

const apiUsuario = {
    id: 1,
    email:"native@teste.com",
    senha: "123"
}

function Login({navigation}) {
    
    function autenticacao() {
        // fetch("")
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Produtos")
        } else {
            Alert.alert("Usuário inválido", "Este usuário não existe...")
        }

        // if (Platform.OS === "web") {
        //     alert("foi")
        // } else {
        //     Alert.alert(Platform.OS)
        // }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.caixa}>

            <ImageBackground source={fundoHayley} style={styles.fundo}>

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput
                    placeholder="Digite o email..."
                    style={styles.input}
                    value={usuario}
                    onChangeText={(text) => setUsuario(text)}
                    />

                    <TextInput placeholder="Digite a senha..."
                    style={styles.input}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                

            </ImageBackground>

        </View>
    )
}

export default Login;