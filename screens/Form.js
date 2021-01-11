import * as React from 'react';
import getTheme from '../native-base-theme/components';
import Custom from '../native-base-theme/variables/custom';
import {
  Container,
  Content,
  Body,
  StyleProvider,
  Icon,
  Button,
  Header,
  Form,
  Item,
  Input,
  Title,
  Toast,
} from 'native-base';

import {SafeAreaView, StyleSheet, ScrollView, View, Image} from 'react-native';
import CameraView from './Camera';
import store from '../redux/store';
import {ADD_PERSON} from '../redux/actions';
import PersonRepository from '../repositories/person';
import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
  },
  imageView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photo: {
    padding: 10,
    width: 188,
    height: 251,
    resizeMode: 'center',
  },
});

export default function Lista(props) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState({});
  const [showCamera, setShowCamera] = useState(false);

  const savePerson = () => {
    const repository = new PersonRepository();
    //Adicionando nova pessoa

    repository.Save(
      {name, birthday, photo, location},
      () => {
        //Informando que o cadastro foi feito com sucesso
        alert('Salvo com Sucesso');

        //Retornando a tela inicial
        const navigation = props.navigation;
        navigation.replace('List');
      },
      (e) => {
        alert('Erro durante salvamento ' + JSON.stringify(e));
      },
    );
  };

  const openCamera = () => {
    setShowCamera(true);
  };

  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        if (position.coords) {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        }
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    findCoordinates();
  }, []);

  if (showCamera) {
    return <CameraView setShowCamera={setShowCamera} setPhoto={setPhoto} />;
  }

  return (
    <StyleProvider style={getTheme(Custom)}>
      <SafeAreaView style={styles.safeArea}>
        <Container style={styles.container}>
          <Header>
            <Body>
              <Title>Cadastro</Title>
            </Body>
          </Header>
          <Content style={styles.content}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.imageView}>
                <Image
                  style={styles.photo}
                  source={{uri: `data:image/png;base64,${photo}`}}
                />
              </View>

              <Form>
                <Item>
                  <Input
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Nome"
                  />
                </Item>
                <Item>
                  <Input
                    value={birthday}
                    onChangeText={(text) => setBirthday(text)}
                    placeholder="Data de Nascimento"
                  />
                </Item>
              </Form>
            </ScrollView>
          </Content>
        </Container>

        <View
          style={{
            position: 'absolute',
            bottom: 95,
            right: 25,
          }}>
          <Button
            rounded
            dark
            style={{
              height: 55,
              width: 55,
            }}
            onPress={openCamera}>
            <Icon type="FontAwesome" name="camera" />
          </Button>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 25,
            right: 25,
          }}>
          <Button
            rounded
            dark
            style={{
              height: 55,
              width: 55,
            }}
            onPress={savePerson}>
            <Icon type="FontAwesome" name="save" />
          </Button>
        </View>
      </SafeAreaView>
    </StyleProvider>
  );
}
