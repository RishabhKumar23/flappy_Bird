import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import logo from '../../../../assets/images/logo.png'
import play from '../../../../assets/images/play.png'
import { styles } from './styles'

interface StartProps {
  handleOnStartGame: () => void;
  handleBackToStart: () => void;
}

const Start:React.FC<StartProps> = ({ handleOnStartGame  }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TouchableWithoutFeedback onPress={handleOnStartGame}>
        <Image source={play} style={styles.playButton} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Start
