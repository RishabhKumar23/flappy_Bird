import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "../utils/random";
import Obstacle from "../components/Obstacle";
import { useState, useRef, useEffect } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from 'expo-media-library';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const bottom = 51;

export default () => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world;

    engine.gravity.y = 0.5

    const pipeSizePositionA = getPipeSizePosPair();
    const pipeSizePositionB = getPipeSizePosPair(windowWidth * 0.9);

    return {
        physics: { engine, world },
        Bird: Bird(world, 'green', { x: 120, y: 450 }, { height: 40, width: 40 }),

        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'green', pipeSizePositionA.pipeTop.position, pipeSizePositionA.pipeTop.size, true),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'green', pipeSizePositionA.pipeBottom.position, pipeSizePositionA.pipeTop.size, false),


        ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'green', pipeSizePositionB.pipeTop.position, pipeSizePositionB.pipeTop.size, true),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'green', pipeSizePositionB.pipeBottom.position, pipeSizePositionB.pipeBottom.size, false),

        Floor: Floor(world, '#E1D694', { x: windowWidth / 2, y: windowHeight - 17 }, { height: bottom + 20, width: windowWidth })
    }
}