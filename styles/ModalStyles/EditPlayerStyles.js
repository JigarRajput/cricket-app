import { StyleSheet } from "react-native";
export const editPlayerStyles = StyleSheet.create({
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000aa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyboardAvoidStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    mainContainer: {
        padding: 25,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        maxHeight: '100%',
    },
    inputGeneral: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        paddingVertical: 5,
        marginVertical: 10,
        paddingHorizontal: 15,
        width: '100%'
    },
    inputGroup: {
        // flexDirection: 'row',
        // columnGap: 10,
        // paddingHorizontal: 20
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 45
    },
    saveBtnStyles: {
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