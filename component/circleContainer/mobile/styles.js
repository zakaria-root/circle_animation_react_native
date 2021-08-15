import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center",
    },
    image:{
        width: 250,
        height: 200,
        marginLeft: 65,
        padding: 20,
        // borderWidth: 5,
        // borderRadius: 22,
        // borderColor: 'rgba(242,179,191,0.9)'
    },
    borderImage:{
        width: "100%",
        height: 210,
        
    },
    title:{
        color: "#F2B3BF",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'sans-serif-light',
        paddingBottom: 5

    },
    subTitle: {
        paddingHorizontal: 30,
        textAlign: "center",
        color: "rgba(242,179,191,0.5)",
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

export default styles;