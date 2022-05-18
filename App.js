import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import {LinearGradient} from "expo-linear-gradient";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    function pickedNumberHandle(pickedNumber){
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandle() {
        setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandle} />;

    if(userNumber){
        screen = <GameScreen onGameOver={gameOverHandle} userNumber={userNumber} />;
    }

    if(gameIsOver && userNumber){
        screen = <GameOverScreen />;
    }

    return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primaryDarker,Colors.secondary]}>
        <ImageBackground
            style={styles.rootScreen}
            source={require('./assets/images/background.jpg')}
            resizeMode="cover"
            imageStyle={{opacity: 0.15}}
        >
            <SafeAreaView style={styles.rootScreen}>
                { screen }
                <StatusBar style="light" />
            </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
