import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'
import gameOver from '../../../../assets/images/game-over.png'
import play from '../../../../assets/images/play.png'
import { styles } from './styles'

interface GameOverProps {
  handleOnStartGame: () => void;
  handleBackToStart: () => void;
}

const GameOver:React.FC<GameOverProps> = ({ handleOnStartGame, handleBackToStart }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleBackToStart();
    }, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [handleBackToStart]);

  return (
    <View style={styles.container}>
      <Image source={gameOver} style={styles.logo} />
      <TouchableWithoutFeedback onPress={handleOnStartGame}>
        <Image source={play} style={styles.playButton} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default GameOver
