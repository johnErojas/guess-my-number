import { StyleSheet, View, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function enteredNumberHandle(enteredTxt) {
        setEnteredNumber(enteredTxt);
    }
    function resetInputHandle() {
        setEnteredNumber('')
    }

    function confirmInputHandle(){
        //validate
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
            //show alert
            Alert.alert('Invalid Number!','Number has to be a number between 1 and 99',[
                { text:'Ok', style: 'destructive', onPress: resetInputHandle }
            ])
            return;
        }
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={enteredNumberHandle}
                    value={enteredNumber}
                />
                <View style={styles.btnGroup}>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={resetInputHandle}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={confirmInputHandle}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    input: {
        width: 70,
        height: 70,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2,
        color: Colors.secondary,
        textAlign: 'center',
        fontSize: 60,
    },
    btnGroup: {
        marginTop: 18,
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    btnContainer: {
        flex:1,
        paddingHorizontal: 8
    }
})
