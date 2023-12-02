import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 220,
        height: 60
    },
    playButton: {
        marginTop: 32,
        width: 120,
        height: 75
    },
    characterImage: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 8,
    },
    selectedCharacter: {
        borderWidth: 2,
        borderColor: 'blue', // You can change the color to indicate selection
    },
})