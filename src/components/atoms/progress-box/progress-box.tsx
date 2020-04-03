import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {animated, useSpring} from 'react-spring/native';
import {Text} from 'react-native-elements';
import {Colors} from '@styles/colors';

const AnimatedView = animated(View);

export const ProgressBox = () => {
  const [open, setOpen] = useState<boolean>(false);

  const props = useSpring({
    width: open ? '100%' : '0%',
    config: {duration: 5000},
  });

  return (
    <TouchableWithoutFeedback onPress={() => setOpen(true)}>
      <View style={styles.progressBoxContainer}>
        <View style={styles.progressBox}>
          <AnimatedView
            style={{
              ...styles.animatedProgress,
              ...props,
            }}
          />
          <View style={styles.content}>
            <Text style={styles.textContent}>Scanning...</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  progressBoxContainer: {
    width: '100%',
    height: 42,
    position: 'absolute',
    bottom: 64,
    margin: 'auto',
    alignItems: 'center',
    overflow: 'hidden',
  },
  progressBox: {
    borderColor: 'white',
    borderWidth: 2,
    position: 'relative',
    width: '80%',
    height: '100%',
    borderRadius: 12,
  },
  animatedProgress: {
    position: 'absolute',
    top: 0,
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    color: 'white',
    fontWeight: 'bold',
  },
});
