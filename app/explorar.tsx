import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, RootStackParamList } from './types/navigation';

type Props = CompositeScreenProps<
    BottomTabScreenProps<TabParamList, 'Explorar'>,
    NativeStackScreenProps<RootStackParamList>
>;

const { width } = Dimensions.get('window');

type ONG = {
    id: string;
    nome: string;
    causa: string;
    imagem: any;
};

// ARRAY DE ONGS
const ongs: ONG[] = [
    {
        id: '1',
        nome: 'Amigos da Natureza',
        causa: 'Proteção ambiental',
        imagem: require('../assets/images/logo-ong.png'),
    },
    {
        id: '2',
        nome: 'Sorrisos do Futuro',
        causa: 'Educação infantil',
        imagem: require('../assets/images/logo-ong.png'),
    },
    {
        id: '3',
        nome: 'Mãos Solidárias',
        causa: 'Apoio a famílias carentes',
        imagem: require('../assets/images/logo-ong.png'),
    },
    {
        id: '4',
        nome: 'Vida Animal',
        causa: 'Resgate de animais',
        imagem: require('../assets/images/logo-ong.png'),
    },
];

// COMPONENTE SEPARADO
function ONGCard({ ong }: { ong: ONG }) {
    return (
        <View style={styles.card}>
            <Image source={ong.imagem} style={styles.imagem} />

            <View style={styles.infoContainer}>
                <Text style={styles.nome}>{ong.nome}</Text>
                <Text style={styles.causa}>{ong.causa}</Text>
            </View>
        </View>
    );
}

export default function Explorar({ route }: Props) {
    const userName = route.params?.userName || 'Visitante';

    const [loading, setLoading] = useState(true);

    // SIMULAÇÃO DE API
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // LOADING
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#A06AB9" />
                <Text style={styles.loadingText}>Carregando ONGs...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {userName} 👋</Text>
            <Text style={styles.subtitle}>
                Explore ONGs e descubra causas incríveis
            </Text>

            <FlatList
                data={ongs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ONGCard ong={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#6A3093',
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666',
    },

    listContainer: {
        paddingBottom: 20,
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 3,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    imagem: {
        width: '100%',
        height: width * 0.45,
        resizeMode: 'contain',
        backgroundColor: '#eee',
    },

    infoContainer: {
        padding: 16,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
    },

    causa: {
        fontSize: 15,
        color: '#666',
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
});