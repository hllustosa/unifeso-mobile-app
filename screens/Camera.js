import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function CameraView(props) {
  const camera = useRef(null);

  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      //alert(JSON.stringify(Object.keys(data)));
      props.setPhoto(data.base64);
      props.setShowCamera(false);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permissão para utilizar a câmera',
          message: 'O App precisa de sua permissão para acessar a Câmera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permissão para utilizar a câmera',
          message: 'O App precisa de sua permissão para acessar a Câmera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14}}> Click </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
