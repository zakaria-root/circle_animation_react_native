import React from "react";
import styles from "./styles";
import { 
    View, 
    Text, 
    Image 
} from "react-native";
import { Avatar } from "react-native-elements";
import { Animated } from "react-native";

const Mobile = ({animatedValue, circleBg}) => {


    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Animated.Text style={[styles.headertitle, {
                    color: circleBg
                }]}>HOME
                </Animated.Text><Animated.Text style={[styles.headertitle, {
                    color: circleBg
                }]}>STORE
                </Animated.Text>
            </View>
            <Animated.View style={[styles.borderImage, {transform:[
                        {
                            scale : animatedValue.interpolate({
                                inputRange : [0 , 0.3, 0.6, 1],
                                outputRange : [1, 0.1, 0, 0]
                            })
                        },
                        
                    ] ,
                    opacity: animatedValue.interpolate({
                        inputRange : [0 ,0.05,0.2, 0.3, 1],
                        outputRange : [1,0.3,0,0,0]
                    })
                    }]}>
            <Avatar source={{ uri : 'https://i.pinimg.com/originals/1a/06/87/1a0687ce73de0a3412b24984fab93716.gif' }}  
            style={styles.image} 
            rounded
            /> 
            </Animated.View>

            <Animated.Text style={[styles.title, {transform:[
                        {
                            scale : animatedValue.interpolate({
                                inputRange : [0 , 0.3, 0.6, 1],
                                outputRange : [1, 0.1, 0, 0]
                            })
                        },
                        
                    ] ,
                    opacity: animatedValue.interpolate({
                        inputRange : [0 ,0.05,0.2, 0.3, 1],
                        outputRange : [1,0.3,0,0,0]
                    })
                    }]}>Design App Mobile </Animated.Text>
            <Animated.Text style={[styles.subTitle , {transform:[
                        {
                            scale : animatedValue.interpolate({
                                inputRange : [0 , 0.3, 0.6, 1],
                                outputRange : [1, 0.1, 0, 0]
                            })
                        },
                        
                    ] ,
                    opacity: animatedValue.interpolate({
                        inputRange : [0 ,0.05,0.2, 0.3, 1],
                        outputRange : [1,0.3,0,0,0]
                    })
                    }]}>Crypto Wallet App designed by Dmitri Litvinov. Connect with them on Dribbble; the global community for designers and creative professionals..
            </Animated.Text>
            
        </View>
    )
}

export default Mobile;