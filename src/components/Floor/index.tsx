// Import necessary components and modules
import { View, Text, Image } from 'react-native'
import React from 'react'
import Matter from 'matter-js'
import { styles } from './styles'

// Floor component responsible for rendering the floor view
const Floor = (props: { body: { bounds: { max: { x: number; y: number }; min: { x: number; y: number } }; position: { x: number; y: number } }; color: any }) => {
    // Extract dimensions and position information from the body
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody / 2;
    const yBody = props.body.position.y - heightBody / 2;

    const color = props.color;

    // Render the floor view using the provided styles
    return (
        <View
            style={styles({
                widthBody,
                heightBody,
                xBody,
                yBody,
                color
            }).floor}
        />
    )
}

// Function to create and add a floor to the Matter world
export default (world: Matter.World, color: any, position: { x: number; y: number }, size: { width: number; height: number }) => {
    // Create the initial floor body using Matter.js
    const initialFloor = Matter.Bodies.rectangle(
        position.x,
        position.y,
        size.width,
        size.height,
        { label: 'Floor', isStatic: true }
    )

    // Add the floor to the Matter world
    Matter.World.add(world, [initialFloor]);

    // Return an object with relevant information about the floor
    return {
        body: initialFloor,
        color,
        position,
        // Pass default values for the Floor renderer (empty view with no color)
        renderer: <Floor body={{
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
        }} color={undefined} />
    }
}
