import styles from "./styles";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Animated } from "react-native";

const CircleContainer = ({onPress, animatedValue}) => {
    return(
        <View style={styles.container} >
            <Animated.View style={[styles.button, {
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
                            outputRange : [1, 12, 1]
                        })
                    },
                    {
                        translateX : animatedValue.interpolate({
                            inputRange : [0 , 0.5, 1],
                            outputRange : [0, 25 , 0]
                        })
                    },
                    
                ],
            }]}>
                <TouchableOpacity 
                onPress={onPress}
                >
                <AntDesign name="caretright" size={20} color="white" />
                </TouchableOpacity>
            </Animated.View>
            
            
        </View>
    )
}

export default CircleContainer;