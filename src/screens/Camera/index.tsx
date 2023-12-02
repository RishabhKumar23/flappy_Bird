import { Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { styles } from './styles'
import cameraBtn from '../../assets/images/play.png'
import * as ImagePicker from 'expo-image-picker'

////////////////////////////////////////////////////

const useImageStore = () => {
    const [imageData, setImageData] = React.useState(null);

    const setImage = (image: React.SetStateAction<null>) => {
        setImageData(image);
    };

    const getImage = () => {
        return imageData;
    };

    const clearImage = () => {
        setImageData(null);
    }; const useImageStore = () => {
        const [imageData, setImageData] = React.useState(null);

        const setImage = (image: React.SetStateAction<null>) => {
            setImageData(image);
        };

        const getImage = () => {
            return imageData;
        };

        const clearImage = () => {
            setImageData(null);
        };

        return { setImage, getImage, clearImage };
    };

    return { setImage, getImage, clearImage };
};

////////////////////////////////////////////////////

const Camera: React.FC = () => {
    const [hasGalleryPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasCameraPermission(galleryStatus.status === 'granted');
        })();
    }, [])

    if (hasGalleryPermission === undefined) {
        return <Text>Requesting Permission...</Text>
    } else if (!hasGalleryPermission) {
        return <Text>Permission for Gallery not granted. Please change this in setting</Text>
    }

    const pickImage = async () => {
        let storedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(storedImage);

        if (!storedImage.canceled) {
            setImage(storedImage.uri);
        }
    }

    return (
        <>
            <TouchableWithoutFeedback style={styles.container} onPress={pickImage}>
                <Image source={cameraBtn} style={styles.buttonContainer} />
            </TouchableWithoutFeedback>
            {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
        </>
    )
}

export default Camera