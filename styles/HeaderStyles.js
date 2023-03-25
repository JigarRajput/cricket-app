import { StyleSheet } from "react-native";
export const headerStyles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: '98%',
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 30,
        alignItems: 'center',
        // borderBottomWidth: 0.3,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    teamText: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '700'
    },
    shadowContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    btnContainer: {
        flexDirection: "row",
        columnGap: 10,
        backgroundColor: 'white'
    },
    btn: {
        paddingHorizontal: 15,
        backgroundColor: '#3c3c3c',
        paddingVertical: 10,
        borderRadius: 50
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    }
});