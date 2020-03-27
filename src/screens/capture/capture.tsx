import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {RNCamera, TrackedTextFeature} from 'react-native-camera';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigations/root-navigator';

type CaptureScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Capture'
>;

interface CaptureProps {
  navigation: CaptureScreenNavigationProp;
}

export const Capture = ({navigation}: CaptureProps) => {
  const cameraRef = useRef<RNCamera>(null);
  const [trackedText, setTrackedText] = useState<TrackedTextFeature[]>([]);

  const takePicture = async () => {
    if (cameraRef && cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const {uri} = await cameraRef.current.takePictureAsync(options);

      const recognizedText = trackedText.map(item => item.value);

      navigation.navigate('CheckIngredients', {
        captureUri: uri,
        recognizedText,
      });
    }
  };

  const renderTextBlocks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {trackedText.map(renderTextBlock)}
    </View>
  );

  const renderTextBlock = ({
    bounds,
    value,
  }: Pick<TrackedTextFeature, 'bounds' | 'value'>) => (
    <React.Fragment key={value + bounds.origin.x}>
      <Text
        style={[
          styles.textBlock,
          {left: bounds.origin.x, top: bounds.origin.y},
        ]}
      />
      <View
        style={[
          styles.text,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}
      />
    </React.Fragment>
  );

  const onTextRecognized = ({
    textBlocks,
  }: {
    textBlocks: TrackedTextFeature[];
  }): void => {
    setTrackedText(textBlocks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row size={90}>
          <RNCamera
            ref={cameraRef}
            style={styles.cameraContainer}
            onTextRecognized={onTextRecognized}
          />
          {renderTextBlocks()}
        </Row>
        <Row size={10}>
          <Col style={styles.scanButtonContainer}>
            <Button
              accessible
              accessibilityLabel="Capturar imagen"
              buttonStyle={styles.scanButton}
              onPress={takePicture}
              icon={
                <Icon name="camera" type="evilicon" size={52} color="white" />
              }
            />
          </Col>
        </Row>
      </Grid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scanButtonContainer: {
    backgroundColor: 'white',
    height: 100,
    marginBottom: 12,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    borderRadius: 50,
    width: 68,
  },
  cameraContainer: {
    flex: 1,
    width: 1,
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  textBlock: {
    color: '#F00',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    // padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#F00',
    justifyContent: 'center',
  },
});
