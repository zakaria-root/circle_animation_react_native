import styles from "./styles";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Animated, Text } from "react-native";
import Mobile from "./mobile";
import Web from "./web";

const CircleContainer = ({onPress, animatedValue, index}) => {


    const inputRange = [0, 0.001, 0.5, 0.5001, 1];

    const containerBg = animatedValue.interpolate({
        inputRange,
        outputRange : ['#303A73', '#303A73', '#303A73', '#F2B3BF', '#F2B3BF']
    })

    const circleBg = animatedValue.interpolate({
        inputRange,
        outputRange : ['#F2B3BF', '#F2B3BF', '#F2B3BF', '#303A73', '#303A73']
    })
    
    return(
        <Animated.View style={[styles.container, {
            backgroundColor : containerBg
            }]} >
                {/* handlign the form */}
                {index === 1 ?     
                    <Mobile 
                    animatedValue={animatedValue} 
                    circleBg={circleBg}
                    />
                    :
                    <Web 
                    animatedValue={animatedValue} 
                    circleBg={circleBg}
                    />
                }

            <Animated.View style={[styles.circle, {
                backgroundColor : circleBg,
                transform: [
                    {
                        perspective: 300,
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
                            outputRange : [1, 8, 1]
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
                <Animated.View style={{
                opacity: animatedValue.interpolate({
                            inputRange : [0 ,0.001, 0.5,0.9, 1],
                            outputRange : [1, 0,0,0, 1]
                        }) }}>
                
                <AntDesign name="caretright" size={20}  color={index === 1 ? "#303A73" : "#F2B3BF" }/>
                </Animated.View>
                </TouchableOpacity>
            </Animated.View>
            
            
        </Animated.View>
    )
}

export default CircleContainer;