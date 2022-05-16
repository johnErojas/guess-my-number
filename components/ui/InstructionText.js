import {StyleSheet, Text} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function InstructionText({children, style}) {

    return <Text style={styles.instructionTxt}>{children}</Text>;
}

const styles = StyleSheet.create({
    instructionTxt: {
        color: Colors.secondary,
        fontSize: 32,
        fontWeight: 'bold'
    }
});
