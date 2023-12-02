import Matter from 'matter-js'
import { getPipeSizePosPair } from './random'
import { Dimensions } from 'react-native'


const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const Physics = (entities: { [x: string]: { body: Matter.Body }; physics: { engine: any }; Bird: { body: Matter.Body } }, {touches, time, dispatch}: any)=> {
    let engine = entities.physics.engine;

    touches.filter((t: { type: string }) => t.type === 'press').forEach((t: any) => {
        Matter.Body.setVelocity(entities.Bird.body, {
            x: 0,
            y: -5
        })
    });

    for(let index = 1; index <= 2; index++){
        if(entities[`ObstacleTop${index}`].body.bounds.max.x <= 0){
            const pipeSizePosition = getPipeSizePosPair(windowWidth * 0.1);

            Matter.Body.setPosition(entities[`ObstacleTop${index}`].body, pipeSizePosition.pipeTop.position)
            Matter.Body.setPosition(entities[`ObstacleBottom${index}`].body, pipeSizePosition.pipeBottom.position)


        }
        Matter.Body.translate(entities['ObstacleTop1'].body, {x: -3, y: 0})
        Matter.Body.translate(entities['ObstacleBottom1'].body, {x: -3, y: 0})
    }
    
    Matter.Engine.update(engine, time.delta);

    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({ type: 'game_over'})
    })
    return entities
}