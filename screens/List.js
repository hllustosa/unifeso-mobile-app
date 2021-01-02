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
  List,
  ListItem,
  Text,
  Title,
} from 'native-base';

import store from '../redux/store';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import {useState} from 'react';

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
});

export default function Lista(props) {
  const [people, setPeople] = useState([]);

  React.useEffect(() => {
    setPeople(store.getState().people);
  });

  return (
    <StyleProvider style={getTheme(Custom)}>
      <SafeAreaView style={styles.safeArea}>
        <Container style={styles.container}>
          <Header>
            <Body>
              <Title>Pessoas</Title>
            </Body>
          </Header>
          <Content style={styles.content}>
            <ScrollView style={styles.scrollView}>
              <List>
                {people.map((person, index) => (
                  <ListItem key={`person-${index}`}>
                    <Text>{person.name}</Text>
                  </ListItem>
                ))}
              </List>
            </ScrollView>
          </Content>
        </Container>

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
              height: 50,
              width: 50,
            }}
            onPress={() => {
              const navigation = props.navigation;
              navigation.navigate('Form');
            }}>
            <Icon type="FontAwesome" name="plus" />
          </Button>
        </View>
      </SafeAreaView>
    </StyleProvider>
  );
}
