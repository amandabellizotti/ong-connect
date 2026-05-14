import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';


type Props = NativeStackScreenProps<RootStackParamList, 'dashboard'>;

export default function dashboard({ route, navigation }: any) {
    const userName = (route && route.params && route.params.userName) ? route.params.userName : 'Visitante';

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Image source={require("../assets/images/logo-ong.png")} style={styles.img} />
                <Text style={styles.title}>Olá, {userName}, que bom ter você aqui para ajudar!</Text>

                <Text style={styles.textONG}>Nossa conexão é o ponto de partida para o futuro de alguém</Text>

            </View>


            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}
                    onPress={() => console.log('Botão Conhecer Projetos pressionado!')} >
                    <Text style={styles.buttonText}>Conhecer Projetos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => console.log('Botão Doações pressionado!')} >
                    <Text style={styles.buttonText}>Realize Doações</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log('Acompanhe Eventos pressionado!');
                    }}
                >
                    <Text style={styles.buttonText}>Acompanhe Eventos</Text>
                </TouchableOpacity>

            </View>


            <Button
                title="Sair" onPress={() => navigation.reset(
                    { index: 0, routes: [{ name: 'login' }] } //reseta e volta pro 0
                )}
                color="#863aa7ff"

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#d4b3e27a",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    topo: {
        marginBottom: 50,
        alignItems: "center"
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
    },
    Button: {
        marginVertical: 10,
        borderRadius: 5,
        margin: 10,
    },

    textONG: {
        textAlign: "center",
        color: "#8e5fb0ff",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 10,
        marginRight: 10
    },

    img: {
        width: 150,
        height: 150,
        display: "flex"
    },

    buttons: {
        margin: 20,
    },

    button: {
        backgroundColor: "#A06AB9",
        width: 150,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 5,
    },

    buttonText: {
        color: "#f6e1ffff",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
    },

    inLineText: {
        textAlign: "center",
        textDecorationLine: "underline",
        color: "#6A3093"
    },
});