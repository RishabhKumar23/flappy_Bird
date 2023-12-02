import { ImageBackground, Text, StyleSheet, View } from 'react-native'
import React from 'react'
import backGround from '../../assets/images/background.png'
import { styles } from './styles'
import Game from './Game'

const Home = () => {
  return (
    <>
      <ImageBackground source={backGround} style={styles.container}>
        <Game />
      </ImageBackground>
    </>
  )
}

export default Home
