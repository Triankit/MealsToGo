import React, {useContext} from 'react';
import styled from 'styled-components';
import {useCamera} from 'react-native-camera-hooks';
import {RNCamera} from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from '../../services/authentication/authentication.context';
const ProfileCamera = styled(RNCamera)`
  width: 100%;
  height: 100%;
`;
const CameraButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;
export const CameraScreen = ({navigation}) => {
  const {user} = useContext(AuthenticationContext);
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const snap = async () => {
    if (cameraRef) {
      const photo = await takePicture();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  return (
    <ProfileCamera ref={cameraRef} type={RNCamera.Constants.Type.front}>
      <CameraButton onPress={snap} />
    </ProfileCamera>
  );
};
