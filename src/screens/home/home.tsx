import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Text, Input, Icon, Card, Button} from 'react-native-elements';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@navigations/root-navigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home = ({navigation}: HomeProps) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <Grid>
            <Row>
              <Text h2>Hola Pablo,</Text>
            </Row>
            <Row style={styles.row}>
              <Text h2>¿Qué ingredientes quieres consultar?</Text>
            </Row>
            <Row style={styles.row}>
              <Col size={90}>
                <Input placeholder="Escribe algo..." />
              </Col>
              <Col size={10}>
                <Icon
                  name="search"
                  type="evilicon"
                  containerStyle={styles.searchButton}
                />
              </Col>
            </Row>
            <Row style={styles.row}>
              <Text style={styles.boldText}>Buscados anteriormente:</Text>
            </Row>
            <Row style={styles.row}>
              <ScrollView
                alwaysBounceHorizontal
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScrollView}>
                <Col>
                  <Card
                    image={{uri: 'https://via.placeholder.com/150'}}
                    containerStyle={styles.card}>
                    <Text style={styles.cardText}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cum voluptates doloremque perferendis.
                    </Text>
                  </Card>
                </Col>
                <Col>
                  <Card
                    image={{uri: 'https://via.placeholder.com/150'}}
                    containerStyle={styles.card}>
                    <Text style={styles.cardText}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cum voluptates doloremque perferendis.
                    </Text>
                  </Card>
                </Col>
                <Col>
                  <Card
                    image={{uri: 'https://via.placeholder.com/150'}}
                    containerStyle={styles.card}>
                    <Text style={styles.cardText}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cum voluptates doloremque perferendis.
                    </Text>
                  </Card>
                </Col>
              </ScrollView>
            </Row>
            <Row style={styles.row}>
              <Text style={styles.boldText}>
                Artículos APV Agregados recientemente:
              </Text>
            </Row>
            <Row style={styles.row}>
              <ScrollView
                alwaysBounceHorizontal
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScrollView}>
                <Col>
                  <Card
                    image={{uri: 'https://via.placeholder.com/150'}}
                    imageStyle={styles.productCardImage}
                    containerStyle={styles.productCard}>
                    <Text style={styles.cardText}>Lorem ipsum</Text>
                  </Card>
                </Col>
                <Col>
                  <Card
                    image={{uri: 'https://via.placeholder.com/150'}}
                    imageStyle={styles.productCardImage}
                    containerStyle={styles.productCard}>
                    <Text style={styles.cardText}>Lorem ipsum</Text>
                  </Card>
                </Col>
                <Col>
                  <Card
                    image={{uri: 'https://via.placeholder.com/150'}}
                    imageStyle={styles.productCardImage}
                    containerStyle={styles.productCard}>
                    <Text style={styles.cardText}>Lorem ipsum</Text>
                  </Card>
                </Col>
                <Col>
                  <Card
                    image={{uri: 'https://via.placeholder.com/150'}}
                    imageStyle={styles.productCardImage}
                    containerStyle={styles.productCard}>
                    <Text style={styles.cardText}>Lorem ipsum</Text>
                  </Card>
                </Col>
              </ScrollView>
            </Row>
          </Grid>
        </ScrollView>
        <Grid>
          <Row>
            <Col style={styles.scanButtonContainer}>
              <Button
                accessible
                accessibilityLabel="Abrir camara"
                onPress={() => navigation.navigate('Capture')}
                buttonStyle={styles.scanButton}
                icon={
                  <Icon name="camera" type="evilicon" size={52} color="white" />
                }
              />
            </Col>
          </Row>
        </Grid>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 24,
    height: '90%',
  },
  row: {
    paddingBottom: 26,
  },
  card: {
    width: 200,
  },
  productCard: {
    width: 100,
  },
  productCardImage: {
    width: 100,
    height: 100,
  },
  boldText: {
    fontWeight: 'bold',
  },
  cardText: {
    marginBottom: 10,
  },
  searchButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalScrollView: {},
  scanButtonContainer: {
    backgroundColor: 'white',
    height: 100,
    marginBottom: 12,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // right: '50%',
    // marginRight: -37,
    // bottom: 32,
  },
  scanButton: {
    borderRadius: 50,
    width: 68,
  },
});

export default Home;
