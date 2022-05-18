import {StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Card({children}){
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primaryDarker,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});

