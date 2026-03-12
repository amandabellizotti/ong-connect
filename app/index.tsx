import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image source={require("../assets/images/logo-ong.png")} style={styles.img}/>
        
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

        <TouchableOpacity style={styles.button} 
      onPress={() => console.log('Acompanhe Eventos pressionado!')} >
        <Text style={styles.buttonText}>Acompanhe Eventos</Text>
        </TouchableOpacity>
        
        </View>
        
         <TouchableOpacity style={styles.inLine} 
      onPress={() => console.log('Botão conectar pressionado!')} >

        <Text style={styles.inLineText}>conectar-se</Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#d4b3e27a",
    alignItems: "center",
    justifyContent: "center"
  },

  topo: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: "center"
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
    marginBottom: 10,
  },

  buttonText: {
    color: "#f6e1ffff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

  inLine: {
    
  },

  inLineText: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#6A3093"
  },

})
