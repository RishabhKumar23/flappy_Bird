// Import necessary components and modules
import { View, Text, Image } from 'react-native'
import React from 'react'
import Matter from 'matter-js'
import pipeGreen from '../../assets/images/pipe-green.png'
import pipeGreenInverted from '../../assets/images/pipe-green-inverted.png'
import pipeOrange from '../../assets/images/pipe-orange.png'
import pipeOrangeInverted from '../../assets/images/pipe-orange-inverted.png'
import { styles } from './styles'

// Obstacle component responsible for rendering the obstacle image
const Obstacle = (props: { body: { bounds: { max: { x: number; y: number }; min: { x: number; y: number } }; position: { x: number; y: number } }; color: any; isTop: any }) => {
    // Extract dimensions and position information from the body
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2

    const color = props.color

    // Render the obstacle image using the provided styles
    return (
        <Image
            // Choose the appropriate image source based on color and orientation
            source={color === "green" ? !props.isTop ? pipeGreen : pipeGreenInverted : !props.isTop ? pipeOrange : pipeOrangeInverted}
            style={styles({
                widthBody,
                heightBody,
                xBody,
                yBody,
                color
            }).obstacle}
        />
    )
}

// Function to create and add an obstacle to the Matter world
export default (world: Matter.World, label: any, color: any, position: { x: number; y: number }, size: { width: number; height: number }, isTop = false) => {
    // Create the initial obstacle body using Matter.js
    const initialObstacle = Matter.Bodies.rectangle(
        position.x,
        position.y,
        size.width,
        size.height,
        { label, isStatic: true }
    )

    // Add the obstacle to the Matter world
    Matter.World.add(world, [initialObstacle]);

    // Return an object with relevant information about the obstacle
    return {
        body: initialObstacle,
        color,
        position,
        isTop,

        // Pass default values for the Obstacle renderer (empty image with no color or orientation)
        renderer: <Obstacle body={{
            bounds: {
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            },
            position: {
                x: 0,
                y: 0
            }
        }} color={undefined} isTop={undefined} />
    }
}
