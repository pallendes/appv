import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import {RNCamera, TrackedTextFeature} from 'react-native-camera';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamList} from '@navigations/stack-navigator';
import {Colors} from '@styles/colors';
import {Button, Icon} from 'react-native-elements';

type CaptureScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamList,
  'Capture'
>;

interface CaptureProps {
  navigation: CaptureScreenNavigationProp;
}

export const Capture = ({navigation}: CaptureProps) => {
  const cameraRef = useRef<RNCamera>(null);
  const [trackedText, setTrackedText] = useState<TrackedTextFeature[] | null>(
    null,
  );
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const takePicture = async () => {
    if (trackedText && cameraRef && cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const {uri} = await cameraRef.current.takePictureAsync(options);

      const recognizedText = trackedText.map(
        (item: TrackedTextFeature) => item.value,
      );

      setIsScanning(false);
      setTrackedText(null);

      navigation.navigate('CheckIngredients', {
        captureUri: uri,
        recognizedText,
      });
    }
  };

  const renderTextBlocks = () => {
    if (!trackedText || trackedText.length === 0) {
      return null;
    }

    return (
      <View style={styles.reconizedTextContainer} pointerEvents="none">
        {trackedText.map((item: TrackedTextFeature) => {
          const {bounds, value} = item;

          const isIngredientsBlock =
            value.toLowerCase().includes('ingredients') ||
            value.toLocaleLowerCase().includes('ingredientes');

          return (
            <View
              style={[
                styles.reconizedText,
                isIngredientsBlock && styles.ingredientsText,
                {
                  ...bounds.size,
                  left: bounds.origin.x,
                  top: bounds.origin.y,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  const onTextRecognized = ({
    textBlocks,
  }: {
    textBlocks: TrackedTextFeature[];
  }): void => {
    setTrackedText(textBlocks);
    takePicture();
  };

  return (
    <View style={styles.container}>
      <Grid>
        <Row>
          <RNCamera
            ref={cameraRef}
            style={styles.cameraContainer}
            onTextRecognized={isScanning ? onTextRecognized : undefined}
            flashMode="auto"
            autoFocus="on"
          />
          {renderTextBlocks()}
        </Row>
      </Grid>
      <Button
        accessible
        accessibilityLabel="Capturar imagen"
        buttonStyle={styles.scanButton}
        containerStyle={styles.scanButtonContainer}
        onPress={() => setIsScanning(true)}
        loading={isScanning}
        icon={<Icon name="ios-home" size={52} color="white" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scanButtonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: 54,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  scanButton: {
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 160,
    width: 80,
    height: 80,
  },
  cameraContainer: {
    flex: 1,
    width: 1,
  },
  reconizedTextContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  reconizedText: {
    borderWidth: 4,
    borderRadius: 12,
    position: 'absolute',
    borderColor: 'red',
    justifyContent: 'center',
  },
  ingredientsText: {
    borderColor: Colors.primary,
  },
});
