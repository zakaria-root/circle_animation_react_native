import React,{ useRef, useState }  from 'react';
import { Animated, View } from 'react-native';
import CircleContainer from './component/circleContainer';


export default function App() {

  const [index , setIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = (toValue) => Animated.timing(
    animatedValue,
    {
      toValue,
      duration: 3000,
      useNativeDriver :false
    }
  );

  const onPress = () => {
    setIndex(index === 1 ? 0 : 1)
    animation(index).start();
  }
  return (
    <View>
      <CircleContainer onPress={onPress} animatedValue={animatedValue} />
    </View>
  );
}


