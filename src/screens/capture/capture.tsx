import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {RNCamera} from 'react-native-camera';

export const Capture = () => {
  const cameraRef = useRef<RNCamera>(null);

  const takePicture = async () => {
    if (cameraRef && cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);

      console.log(data.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row size={90}>
          <RNCamera ref={cameraRef} style={styles.cameraContainer} />
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
});
