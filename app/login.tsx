import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react'; // importar o useState

import{ NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'login' >;

export default function Login({ navigation} : Props) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

   const handleLogin = () => {
    console.log("Valores atuais:", { nome, email, senha });
        // 2. Valide se o nome não está vazio
        if (nome.trim() !== '' && email.includes('@') && senha.length >= 6) {
            // 3. Realize a navegação para 'dashboard' enviando nome e ID aleatório
            navigation.navigate('dashboard', {  
                voluntarioId: 'ID-' + Math.floor(Math.random() * 10000).toString(),
                userName: nome // Envia o nome capturado
            });
            console.log("✅ Navegando para Dashboard com:", nome);
        } else {
            alert("Por favor, digite o nome do voluntário.");
            console.log("❌ Falha no login: Nome vazio.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Login</Text>
            <Image source={require("../assets/images/logo-ong.png")} style={styles.img} />
            <View style={styles.cadastro}>
                {email.length > 0 && (
                    <Text style={styles.textoAjuda}>
                        Logando como: {email}
                    </Text>
                )}

                <TextInput style={styles.input} 
                placeholder="Nome do Voluntário" 
                value={nome} 
                onChangeText={setNome} 
                placeholderTextColor={"#ccc"} 
                 />

                <TextInput style={styles.input} 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
                placeholderTextColor={"#ccc"} 
                autoCapitalize="none" 
                keyboardType="email-address"/>


                <TextInput style={styles.input} 
                placeholder="Senha" 
                value={senha} 
                onChangeText={setSenha} 
                placeholderTextColor={"#ccc"} 
                secureTextEntry={true} />
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                <Text style={styles.botaoText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d4b3e27a",
        alignItems: "center",
        justifyContent: "center"
    },
    cadastro: {
        marginTop: 20,
        width: "90%",
        alignItems: "center"
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 6,
        color: "#333"
    },
    text: {
        color: "#6A3093",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    img: {
        width: 150,
        height: 150,
        display: "flex"
    },
    botao: {
        backgroundColor: "#A06AB9",
        width: 160,
        height: 40,
        color: "#fff",
        borderRadius: 8,
        marginTop: 20,
    },
    botaoText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 40
    },
    textoAjuda: {
        color: "#bb6bff",
        fontSize: 14,
        marginBottom: 10
    }
});