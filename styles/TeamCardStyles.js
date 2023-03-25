import { StyleSheet } from "react-native";

export const teamCardStyles = StyleSheet.create({
    cardContainer: {
        marginTop: 15,
        marginHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        borderColor: 'grey',
        borderWidth: .5,
        columnGap: 20,
        padding: 15,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    playerImgStyles: {
        width: 126,
        height: 120,
        borderRadius: 14
    },
    cardRight: {
        justifyContent: 'space-between'
    },
    teamNameText: {
        fontSize: 22,
        fontWeight: '500'
    },
    playerTypeText: {
        fontStyle: 'italic',
        fontWeight: '600',
        color: '#808080'
    },
    playerCountContainer: {
        flexDirection: 'row'
    },
    playerCountText: {
        color: '#595959'
    },
    playerCountValue: {
        fontWeight: '700'
    },
    buttonsContainer: {
        flexDirection: 'row',
        columnGap: 15
    },
    editBtn: {
        width: 60,
        height: 25,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editBtnText: {
        color: "white"
    },
    playersBtn: {
        width: 110,
        height: 25,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playersBtnText: {
        color: 'black'
    }
})