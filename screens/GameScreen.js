import React, { useState, useEffect } from "react";
import {StyleSheet, View, Alert } from 'react-native'
import Title from "../components/ui/Title";
import Andes from "./../utils/Andes"
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
export default function GameScreen({userNumber, onGameOver}) {
    let minBoundary = 1;
    let maxBoundary = 100;

    const initialGuess = Andes.randomBetween(1,100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess,userNumber,onGameOver]);

    function nextGuestHandler(direction) {// direction => 'lower', 'greater'
        //lie
        if(
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ){
            Alert.alert("Don't Lie!","You know that this is wrong..",[
                { text: "Sorry", style:'cancel' }
            ]);
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = Andes.randomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower?</InstructionText>
                <View style={styles.btnGroup}>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuestHandler.bind(this,'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuestHandler.bind(this,'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    btnGroup: {
        flexDirection: 'row'
    },
    btnContainer: {
        flex: 1
    }
});
