import React, { useRef, useEffect, useState } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    ScrollView,
    Alert,
} from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, RootStackParamList } from './types/navigation';

type Props = CompositeScreenProps<
    BottomTabScreenProps<TabParamList, 'Perfil'>,
    NativeStackScreenProps<RootStackParamList>
>;

export default function Perfil({ route, navigation }: Props) {
    const userName = route.params?.userName || 'Visitante';
    const voluntarioId = route.params?.voluntarioId || 'ID-0';

    const [interesse, setInteresse] = useState('Nenhum definido');

    const editarInteresses = () => {
        Alert.alert(
            'Escolha uma causa',
            'Qual área você prefere ajudar?',
            [
                {
                    text: 'Educação',
                    onPress: () => setInteresse('Educação'),
                },
                {
                    text: 'Meio Ambiente',
                    onPress: () => setInteresse('Meio Ambiente'),
                },
                {
                    text: 'Saúde',
                    onPress: () => setInteresse('Saúde'),
                },
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
            ]
        );
    };

    const handleLogout = () => {
        Alert.alert('Sair', 'Tem certeza que deseja sair?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', style: 'destructive', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Login' as any }], }) },
        ]);
    };

    return (


        <View style={styles.container}>
            <Text style={styles.title}>Perfil de {userName}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nome: {userName}</Text>
                <Text style={styles.infoText}>Email: {userName.toLowerCase()}@exemplo.com</Text>
                <Text style={styles.infoText}>Voluntário: {voluntarioId}</Text>
                <Text style={styles.infoText}>Interesse: {interesse}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.editButton}
                onPress={editarInteresses}
            >
                <Text style={styles.editButtonText}>
                    Editar Interesses
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 30,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: '#ff4d4d',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    editButton: {
        backgroundColor: '#A06AB9',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 15,

        elevation: 4,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});