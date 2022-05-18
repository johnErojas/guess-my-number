import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Colors from "../../constants/Colors";
export default function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.outerContainer}>
        <Pressable
            style={({pressed}) => pressed ? [styles.innerContainer,styles.pressed]:styles.innerContainer }
            onPress={onPress}
            android_ripple={{color:"red"}}
        >
            <Text style={styles.cmdText}>{children}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer: {
        overflow: 'hidden',
        margin: 4
    },
    innerContainer: {
        borderRadius: 16,
        backgroundColor: Colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
        elevation: 2
    },

    cmdText: {
        color: 'white'
    },

    pressed: {
        opacity: 0.75
    }
})
