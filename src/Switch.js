import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

const Switch = ({ isOn, handleToggle }) => {
  const switchAnimation = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  const animateSwitch = () => {
    Animated.timing(switchAnimation, {
      toValue: isOn ? 0 : 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => handleToggle(!isOn));
  };

  const switchTranslateX = switchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <TouchableOpacity onPress={animateSwitch} style={styles.container}>
      <Animated.View
        style={[
          styles.switchTrack,
          {
            backgroundColor: isOn ? '#4CAF50' : '#ccc',
          },
        ]}
      >
        <Animated.View
          style={[
            styles.switchThumb,
            {
              transform: [{ translateX: switchTranslateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchTrack: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
  },
  switchThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  }
});

export default Switch;




