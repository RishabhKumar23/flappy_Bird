// Import necessary components and modules
import { Image } from 'react-native'
import React from 'react'
import Matter from 'matter-js'
import bird from '../../assets/images/bird.png'
import { styles } from './styles'

// Bird component responsible for rendering the bird image
const Bird = (props: { body: { bounds: { max: { x: number; y: number }; min: { x: number; y: number } }; position: { x: number; y: number } }; color: any }) => {
    // Extract dimensions and position information from the body
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2

    const color = props.color

    // Render the bird image using the provided styles
    return (
        <Image
            source={bird}
            style={styles({
                widthBody,
                heightBody,
                xBody,
                yBody,
                color
            }).bird}
        />
    )
}

// Function to create and add a bird to the Matter world
export default (world: Matter.World, color: any, position: { x: number; y: number }, size: { width: number; height: number }) => {
    // Create the initial bird body using Matter.js
    const initialBird = Matter.Bodies.rectangle(
        position.x,
        position.y,
        size.width,
        size.height,
        { label: 'Bird' }
    )

    // Add the bird to the Matter world
    Matter.World.add(world, [initialBird]);

    // Return an object with relevant information about the bird
    return {
        body: initialBird,
        color,
        position,
        renderer: <Bird />
    }
}
