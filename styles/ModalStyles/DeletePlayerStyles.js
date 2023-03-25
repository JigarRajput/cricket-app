import { StyleSheet } from "react-native";
export const deletePlayerStyles = StyleSheet.create({

    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000aa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        padding: 25,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center'
    },
    confirmBtnStyles: {
        backgroundColor: "#EFCC00",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16
    },
    cancelBtnStyles: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1.5
    }

})