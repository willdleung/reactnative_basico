import {StyleSheet, Platform} from 'react-native'

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
    },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        color: "white",
        fontSize: 32,
    },
    inputs: {
        width: "100%",
        padding: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 12,
        marginTop: 12,
        fontSize: 20
    },
    btn: {
        width: "50%",
        backgroundColor: "#6A5ACD",
        marginTop: 12,
        padding: 8,
        borderRadius: 8,
    },
    texto: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    }
})

export default styles;