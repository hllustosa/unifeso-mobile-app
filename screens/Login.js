import * as React from 'react';
import {useEffect, useState} from 'react';
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
  Text,
} from 'native-base';

import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import UserRepository from "../repositories/user";
import FesoLogo from '../resources/feso-logo.png';
import store from '../redux/store';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  logo: {
    resizeMode: 'center',
  },
  form: {
    width: '90%',
  },
});

export default function Splash(props) {
  const navigation = props.navigation;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const goToList = () => {
    navigation.replace('List');
  };

  const login = () => {
    const userRepository = new UserRepository();
    userRepository.Login(name, password, (result, error) => {
      if(error){
        alert("Erro durante autenticação");
        alert(error)
        return;
      }

      if(!result.auth){
        alert("Usuário e senha inválidos");
        return;
      }

      store.dispatch({type: 'LOGIN', payload: result.token});
      goToList();
    })
  }

  return (
    <StyleProvider style={getTheme(Custom)}>
      <SafeAreaView style={styles.safeArea}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.logo} source={FesoLogo} />
          <Form style={styles.form}>
            <Item>
              <Input
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Login"
              />
            </Item>
            <Item>
              <Input
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder="Senha"
              />
            </Item>
            <Button dark full style={{marginTop: 15}} onPress={login}>
              <Text>Entrar</Text>
            </Button>
          </Form>
        </View>
      </SafeAreaView>
    </StyleProvider>
  );
}
