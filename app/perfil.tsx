import React, { useRef, useEffect, useState } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    ScrollView,
    Modal
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
    const [modalVisible, setModalVisible] = useState(false);

    const editarInteresses = () => {
        setModalVisible(true);
    };

    const selecionarInteresse = (valor: string) => {
        setInteresse(valor);
        setModalVisible(false);
    }

    

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
            
            <TouchableOpacity style={styles.logoutButton} >
                <Text style={styles.logoutButtonText}>Sair</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible}
                transparent
                animationType='slide'

            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Escolha uma causa</Text>
                    
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => selecionarInteresse('Educação')}
                    >
                        <Text style={styles.modalButtonText}>Educação</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => selecionarInteresse('Meio Ambiente')}
                    >
                        <Text style={styles.modalButtonText}>Meio Ambiente</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => selecionarInteresse('Saúde')}
                    >
                        <Text style={styles.modalButtonText}>Saúde</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.fecharButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.fecharButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
    editButton: {
        backgroundColor: '#6A3093',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#A06AB9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
        backgroundColor: '#c38adeff',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
   
    modalButton: {
        backgroundColor: '#6A3093',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    fecharButton: {
        backgroundColor: '#A06AB9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    fecharButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});