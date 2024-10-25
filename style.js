import { StyleSheet, PixelRatio } from 'react-native';

const widthToDp = (number) => {
    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const styles = StyleSheet.create({
    pdb4: { paddingBottom: '4%' },

    title: {
        paddingTop: 0,
        paddingRight: 0,
        color: '#656565',
        fontSize: widthToDp('3.8%'),
    },
    fullWidth: {
        width: '100%',
        borderWidth: 0.5,
        borderRadius: 6,
        fontSize: widthToDp('3.5%'),
        backgroundColor: '#f5f5f5',
        minHeight: 40,
        padding: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdownInnerBox: {
        backgroundColor: '#fff',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        minHeight: 100,
        maxHeight: 200
    },
    dropdownInnerTextTouchable: {
        paddingVertical: '1%',
        marginBottom: '2%',
        paddingHorizontal: 6,
    },
})

export default styles;