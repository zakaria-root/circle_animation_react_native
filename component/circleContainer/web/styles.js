import { StyleSheet } from "react-native";
import { withTheme } from "react-native-elements";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center",
    },
    image:{
        width: 300,
        height: 200,
        marginLeft: 42,
        padding: 15
    },
    borderImage:{
        width: "100%",
        height: 210,
        
    },
    title:{
        color: "#EDEDED",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'sans-serif-light',
        paddingBottom: 5

    },
    subTitle: {
        paddingHorizontal: 30,
        textAlign: "center",
        color: "rgba(237,237,237,0.7)",
        marginBottom: 130,
    },
    headerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        top: 50,
        padding: 15,
    },
    headertitle:{
        fontSize: 15,
        fontWeight: "bold"
    }

})

export default Styles;