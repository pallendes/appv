import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import {RNCamera, TrackedTextFeature} from 'react-native-camera';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamList} from '@navigations/stack-navigator';
import {Colors} from '@styles/colors';
import {ProgressBox} from '@atoms/progress-box';

type CaptureScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamList,
  'Capture'
>;

interface CaptureProps {
  navigation: CaptureScreenNavigationProp;
}

export const Capture = ({navigation}: CaptureProps) => {
  const cameraRef = useRef<RNCamera>(null);
  const [trackedText, setTrackedText] = useState<TrackedTextFeature | null>(
    null,
  );

  const takePicture = async () => {
    if (trackedText && cameraRef && cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const {uri} = await cameraRef.current.takePictureAsync(options);

      const recognizedText = trackedText?.value;

      navigation.navigate('CheckIngredients', {
        captureUri: uri,
        recognizedText,
      });
    }
  };

  const filterIngredients = (textBlock: string): boolean => {
    const normalizedText = textBlock.toLowerCase();

    const comparationWords = ['ingredients', 'ingredientes'];

    return comparationWords
      .map(
        (comparationWord: string) =>
          normalizedText.indexOf(comparationWord) !== -1,
      )
      .reduce((prevResult, currentResult) => prevResult || currentResult);
  };

  const renderTextBlocks = () => {
    if (!trackedText) {
      return null;
    }

    const {bounds} = trackedText;

    return (
      <View style={styles.facesContainer} pointerEvents="none">
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
      </View>
    );
  };

  const onTextRecognized = ({
    textBlocks,
  }: {
    textBlocks: TrackedTextFeature[];
  }): void => {
    const filteredBlocks = textBlocks.filter(item =>
      filterIngredients(item.value),
    );

    if (filteredBlocks.length > 0) {
      setTrackedText(filteredBlocks[0]);
      takePicture();
    }
  };

  return (
    <View style={styles.container}>
      <Grid>
        <Row>
          <RNCamera
            ref={cameraRef}
            style={styles.cameraContainer}
            onTextRecognized={onTextRecognized}
            flashMode="auto"
            autoFocus="on"
          />
          {renderTextBlocks()}
        </Row>
        {/* <Row size={10}>
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
        </Row> */}
      </Grid>
      <ProgressBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
    borderWidth: 2,
    borderRadius: 12,
    position: 'absolute',
    borderColor: Colors.primary,
    justifyContent: 'center',
  },
});
