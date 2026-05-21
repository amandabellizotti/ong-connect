export type RootStackParamList={
    login: undefined; // Não pede nada
    dashboard: {userName: string; voluntarioId: string }; //Exige ID e nome
    explorar: {userName: string; voluntarioId: string }; //Exige ID e nome
    perfil: {userName: string; voluntarioId: string }; //Exige ID e nome
};

// Define os tipos de parâmetros para cada aba do Tab Navigator
export type TabParamList = {
    Dashboard: { userName: string; voluntarioId: string }; //Onde ele vê as boas-vindas e resumos.
    Explorar: { userName: string; voluntarioId: string };// Onde aparecerá a lista de ONGs (futura FlatList).
    Perfil: { userName: string; voluntarioId: string }; //Onde ele vê seus dados de voluntário.
};