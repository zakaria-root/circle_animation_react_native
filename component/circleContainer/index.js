import styles from "./styles";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Animated } from "react-native";

const CircleContainer = ({onPress, animatedValue}) => {


    const inputRange = [0, 0.001, 0.5, 0.5001, 1];

    const containerBg = animatedValue.interpolate({
        inputRange,
        outputRange : ['gold', 'gold', 'gold', '#444', '#444']
    })

    const circleBg = animatedValue.interpolate({
        inputRange,
        outputRange : ['#444', '#444', '#444', 'gold', 'gold']
    })
    return(
        <Animated.View style={[styles.container, {
            backgroundColor : containerBg
            }]} >
            <Animated.View style={[styles.circle, {
                backgroundColor : circleBg,
                transform: [
                    {
                        perspective: 400,
                    },
                    {      
                        rotateY: animatedValue.interpolate({        
                            inputRange: [0, 0.5,1],        
                            outputRange: ['0deg', '-90deg', '-180deg']  
                        })
                    },
                    {
                        scale : animatedValue.interpolate({
                            inputRange : [0 , 0.5, 1],
                            outputRange : [1, 15, 1]
                        })
                    },
                    {
                        translateX : animatedValue.interpolate({
                            inputRange : [0 , 0.5, 1],
                            outputRange : [0, 12 , 0]
                        })
                    },
                    
                ],
            }]}>
                <TouchableOpacity 
                onPress={onPress}
                style={styles.icon}
                >
                <AntDesign name="caretright" size={20} color="white" />
                </TouchableOpacity>
            </Animated.View>
            
            
        </Animated.View>
    )
}

export default CircleContainer;