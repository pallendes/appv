import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring/native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const AnimatedView = animated(View);

export const FlipTransition = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const {rotateX, opacity} = useSpring({
    opacity: flipped ? 1 : 0,
    rotateX: `${flipped ? 180 : 0}deg`,
    config: {mass: 5, tension: 500, friction: 80},
  });

  return (
    <TouchableOpacity
      onPress={() => setFlipped(!flipped)}
      style={styles.container}>
      <AnimatedView
        style={{
          ...styles.card1,
          opacity: opacity.interpolate((o: any) => 1 - o).getValue(),
          transform: [{perspective: 600}, {rotateX}],
        }}
      />
      <AnimatedView
        style={{
          ...styles.card2,
          opacity: opacity.getValue() as number,
          transform: [{perspective: 600}, {rotateX}],
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 200,
    left: 0,
  },
  card1: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 200,
    height: 200,
  },
  card2: {
    position: 'absolute',
    backgroundColor: 'green',
    width: 200,
    height: 200,
  },
});
