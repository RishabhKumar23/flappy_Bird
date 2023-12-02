import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import bird from '../../assets/images/bird.png';
import logo from '../../assets/images/logo.png';

const characters = [
  { id: 1, image: bird, name: 'Character 1' },
  { id: 2, image: logo, name: 'Character 2' },
];

const Customize: React.FC = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<number[]>([]);

  const toggleCharacterSelection = (characterId: number): void => {
    const isSelected = selectedCharacters.includes(characterId);
    if (isSelected) {
      setSelectedCharacters((prevSelected) =>
        prevSelected.filter((id) => id !== characterId)
      );
    } else {
      setSelectedCharacters((prevSelected) => [...prevSelected, characterId]);
    }
  };

  return (
    <View style={styles.container}>
      {characters.map((character) => (
        <TouchableWithoutFeedback
          key={character.id}
          onPress={() => toggleCharacterSelection(character.id)}
        >
          <Image
            source={character.image}
            style={[
              styles.characterImage,
              selectedCharacters.includes(character.id) && styles.selectedCharacter,
            ]}
          />
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default Customize;
