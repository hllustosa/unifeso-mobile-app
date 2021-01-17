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
  Left,
  Right,
} from 'native-base';

import store from '../redux/store';
import PersonRepository from '../repositories/person';
import {SafeAreaView, StyleSheet, ScrollView, View, Image} from 'react-native';
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
  photo: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 25,
  },
});

export default function Lista(props) {
  const [people, setPeople] = useState([]);

  const retrieveData = () => {
    const repository = new PersonRepository();
    repository.Retrieve((results) => {
      setPeople(results.rows);
    });
  };

  const deleteData = (id, onSuccess) => {
    const func = () => {
      const repository = new PersonRepository();
      repository.Delete({id}, onSuccess);
    };

    return func;
  };

  React.useEffect(() => {
    retrieveData();
  }, []);

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
                    <Left style={{flex:0.15}}>
                      <Image
                        style={styles.photo}
                        source={{uri: `data:image/png;base64,${person.photo}`}}
                      />
                    </Left>
                    <Body>
                      <Text>{person.name + '\n' + 
                      (!person.latitude ?  "" :  person.latitude.toFixed(2)) 
                      + " " +  (!person.longitude ?  "" :person.longitude.toFixed(2)) }</Text>
                    </Body>
                    <Right style={{flex:0.15}}>
                      <Button
                        icon
                        dark
                        primary
                        style={{
                          height: 50,
                          width: 50,
                        }}
                        onPress={() => {
                          const delFunc = deleteData(person.id, () => {
                            retrieveData();
                          });
                          delFunc();
                        }}>
                        <Icon type="FontAwesome" name="trash" />
                      </Button>
                    </Right>
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
