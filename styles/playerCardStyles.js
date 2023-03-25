import { StyleSheet } from "react-native";

export const playerCardStyles = StyleSheet.create({
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
        width: 146,
        height: 151,
        borderRadius: 14
    },
    cardRight: {
        justifyContent: 'space-between'
    },
    type_matchCountContainer: {
        rowGap: 10,
        paddingBottom: 15
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
    matchCountContainer: {
        flexDirection: 'row'
    },
    matchCountText: {
        color: '#595959'
    },
    matchCountValue: {
        fontWeight: '700'
    },
    editBtn: {
        width: 80,
        height: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    }
})