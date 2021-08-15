import React from "react";
import Styles from "./styles";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { Animated } from "react-native";

const Web = ({animatedValue, circleBg}) => {
    return(
        <View style={Styles.container}>
            <View style={Styles.headerContainer}>
                <Animated.Text style={[Styles.headertitle, {
                    color: circleBg
                }]}>HOME
                </Animated.Text><Animated.Text style={[Styles.headertitle, {
                    color: circleBg
                }]}>STORE
                </Animated.Text>
            </View>
            <Animated.View style={[Styles.borderImage, {transform:[
                {
                    scale : animatedValue.interpolate({
                        inputRange : [0 , 0.3, 0.6, 1],
                        outputRange : [0, 0, 0.1, 1]
                    })
                },
                
            ] ,
            opacity: animatedValue.interpolate({
                inputRange : [0 ,0.05,0.2, 0.3, 1],
                outputRange : [0,0,0,0.3,1]
            })
            }]}>

            <Avatar
            source={{ uri: 'https://i.pinimg.com/originals/8f/fd/ac/8ffdacfee47b69b08c9da0810da94e1c.gif' }}
            style={Styles.image}
            rounded
            />
            </Animated.View>
            <Animated.Text style={[Styles.title, {transform:[
                        {
                            scale : animatedValue.interpolate({
                                inputRange : [0 , 0.3, 0.6, 1],
                                outputRange : [0, 0, 0.1, 1]
                            })
                        },
                        
                    ] ,
                    opacity: animatedValue.interpolate({
                        inputRange : [0 ,0.05,0.2, 0.3, 1],
                        outputRange : [0, 0, 0, 0.3, 1]
                    })
                    }]}
                    >Desig Web Site</Animated.Text>
            <Animated.Text style={[Styles.subTitle, {transform:[
                        {
                            scale : animatedValue.interpolate({
                                inputRange : [0 , 0.3, 0.6, 1],
                                outputRange : [ 0, 0, 0.1, 1]
                            })
                        },
                        
                    ] ,
                    opacity: animatedValue.interpolate({
                        inputRange : [0 ,0.05,0.2, 0.3, 1],
                        outputRange : [0,0,0,0.3,1]
                    })
                    }]}
                    >via Muzli design inspiration. “UI Interactions of the week #67” is published by Muzli in Muzli - Design Inspiration.
                    </Animated.Text>
        </View>
    )
}

export default Web;