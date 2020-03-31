import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Text, Input, Icon, Card, Button} from 'react-native-elements';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamList} from '@navigations/stack-navigator';

type HomeScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamList,
  'Home'
>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home = ({navigation}: HomeProps) => {
  const component = (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Grid>
          <Row style={styles.row}>
            <Text h1 h1Style={styles.title}>
              Hola Pablo, ¿Qué ingredientes quieres consultar?
            </Text>
          </Row>
          <Row style={styles.row}>
            <Input
              placeholder="Escribe algo..."
              rightIcon={
                <Icon
                  name="search"
                  type="evilicon"
                  containerStyle={styles.searchButton}
                />
              }
            />
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
            {/* <ThemeProvider theme={lightTheme}> */}
            <Button
              accessible
              accessibilityLabel="Abrir camara"
              onPress={() => navigation.navigate('Capture')}
              buttonStyle={styles.scanButton}
              icon={
                <Icon name="camera" type="evilicon" size={52} color="white" />
              }
            />
            {/* </ThemeProvider> */}
          </Col>
        </Row>
      </Grid>
    </SafeAreaView>
  );

  return component;
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 24,
    height: '90%',
  },
  row: {
    paddingBottom: 26,
    paddingLeft: 12,
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
    alignContent: 'center',
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
