import React, { useRef, useState } from 'react';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../../entities';
import { styles } from './styles';
import { Physics } from '../../../utils/physics';
import Start from './Start';
import GameOver from './GameOver';
import Customize from '../../Character';

// Define the shape of the events that can be received
interface GameEvent {
  type: string;
  // Add more properties if needed based on your specific event structure
}

const Game: React.FC = () => {
  // State for tracking game status
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Ref for accessing the GameEngine component
  const gameEngineRef = useRef<GameEngine>();

  // Handler to reset the game to the start state
  const handleBackToStart = () => {
    setIsRunning(false);
    setIsGameOver(false);
  };

  // Handler to start the game
  const handleOnStartGame = () => {
    setIsRunning(true);
    setIsGameOver(false);
  };

  // Handler to handle the game over event
  const handleOnGameOver = () => {
    setIsRunning(false);
    setIsGameOver(true);
  };

  // Handler to process events received from the game engine
  const handleOnEvent = (event: GameEvent) => {
    switch (event.type) {
      case 'game_over':
        handleOnGameOver();
        break;
      // Handle other event types if needed
      default:
        break;
    }
  };

  // Conditional rendering based on game status
  if (!isRunning) {
    return isGameOver ? (
      // Render the GameOver component when the game is not running and it's over
      <GameOver
        handleBackToStart={handleBackToStart}
        handleOnStartGame={handleOnStartGame}
      />
    ) : (
      (
        <>
          {/* Render the Start component when the game is not running */}
          <Start handleOnStartGame={handleOnStartGame} handleBackToStart={function (): void {
            throw new Error('Function not implemented.');
          }} />
          <Customize />
        </>
      )
    );
  }

  // Render the GameEngine component when the game is running
  return (
    <GameEngine
      systems={[Physics]}
      ref={(ref) => (gameEngineRef.current = ref)}
      running={isRunning}
      entities={entities()}
      onEvent={handleOnEvent}
      style={styles.engineContainer}
    />
  );
};

export default Game;
