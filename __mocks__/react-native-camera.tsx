import React from 'react';

const timeout = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

export class RNCamera extends React.Component {
  static Constants = {
    Aspect: {},
    BarCodeType: {},
    Type: {back: 'back', front: 'front'},
    CaptureMode: {},
    CaptureTarget: {},
    CaptureQuality: {},
    Orientation: {},
    FlashMode: {},
    TorchMode: {},
  };

  _cameraRef = null;

  _setReference = (ref: any) => {
    this._cameraRef = ref;
  };

  takePictureAsync = async () => {
    await timeout(2000);
    return {
      base64: 'base64string',
    };
  };

  render() {
    return <div ref={this._setReference} />;
  }
}

export default RNCamera;
