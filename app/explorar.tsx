import React, { useRef, useEffect } from 'react';
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
    BottomTabScreenProps<TabParamList, 'Explorar'>,
    NativeStackScreenProps<RootStackParamList>
>;

export default function Explorar({ route, navigation }: Props) {
    const userName = route.params?.userName || 'Visitante';
    const voluntarioId = route.params?.voluntarioId || 'ID-0';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explorar ONGs</Text>
            <Text style={styles.infoText}>Aqui você poderá conhecer as ONGs cadastradas e seus projetos.</Text>
            <Text style={styles.infoText}>Em breve, uma lista de ONGs aparecerá aqui para você explorar!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    logoutButton: {
        marginTop: 30,
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});