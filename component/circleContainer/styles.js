import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'gold',
    width: "100%",
    height:"100%"
    },
    circle:{
        backgroundColor: "#444",
        borderRadius: 50,
        position: "absolute", 
        bottom: 90,
        right: "41%"
    },
    icon : {
        padding: 30
    },
    form:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
  });

export default styles;