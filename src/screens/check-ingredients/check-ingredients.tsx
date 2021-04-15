import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Image, Text, Divider, Icon} from 'react-native-elements';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {RouteProp} from '@react-navigation/native';
import {StackNavigatorParamList} from '@navigations/stack-navigator';
import {Colors} from '@styles/colors';
import {findIngredients} from '@services/ingredients';

type CheckIngredientsScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'CheckIngredients'
>;

interface CheckIngredientsProps {
  route: CheckIngredientsScreenRouteProp;
}

export const CheckIngredients = ({route}: CheckIngredientsProps) => {
  const defaultImage =
    'https://via.placeholder.com/600x600/000.png?text=image+no+disponible';

  useEffect(() => {
    const getNotFitForVeganIngredients = async () => {
      const {recognizedText} = route.params;

      await findIngredients(recognizedText.join(' '));
    };

    getNotFitForVeganIngredients();
  });

  let recognizedText = 'asdasda';

  const promptScanName = () => {
    Alert.prompt(
      'Nombre de escaneo',
      'Ingresa un nombre para registrar los ingredientes que acabas de escanear',
      [
        {
          text: 'Guardar',
          onPress: (value?: string) => {
            console.log(value);
          },
        },
        {text: 'Cancelar', onPress: () => null},
      ],
    );
  };

  return (
    <Grid>
      <Row size={45}>
        <Image
          source={{uri: route.params.captureUri || defaultImage}}
          containerStyle={styles.imageContainer}
          PlaceholderContent={<ActivityIndicator />}
        />
      </Row>
      <Row size={55}>
        <Grid style={styles.content}>
          <Row size={25}>
            <Grid>
              <Row>
                <Col size={90}>
                  <Text h2 h2Style={styles.title}>
                    Lista de ingredientes:
                  </Text>
                </Col>
                <Col size={10}>
                  <TouchableOpacity onPress={promptScanName}>
                    <Icon name="save" type="ionicons" color={Colors.primary} />
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row style={styles.textRow}>
                <Text>
                  Pudimos reconocer los siguientes ingredientes en tu producto
                  que son APV:
                </Text>
              </Row>
            </Grid>
          </Row>
          <Divider />
          <Row size={65}>
            <ScrollView>
              <Row style={styles.textRow}>
                <Col size={35}>
                  <Text style={styles.ingredientName}>{recognizedText}</Text>
                </Col>
                <Col size={75}>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum eligendi deleniti
                  </Text>
                </Col>
              </Row>
              <Divider />
              <Row style={styles.textRow}>
                <Col size={35}>
                  <Text style={styles.ingredientName}>{recognizedText}</Text>
                </Col>
                <Col size={75}>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Text>
                </Col>
              </Row>
              <Divider />
              <Row style={styles.textRow}>
                <Col size={35}>
                  <Text style={styles.ingredientName}>{recognizedText}</Text>
                </Col>
                <Col size={75}>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum eligendi
                  </Text>
                </Col>
              </Row>
              <Divider />
            </ScrollView>
          </Row>
          <Row style={styles.textRow} size={10}>
            <View style={styles.resultContainer}>
              <Icon name="close" type="ionicons" color="white" size={32} />
              <Text style={styles.resultText}>NO APTO</Text>
            </View>
          </Row>
        </Grid>
      </Row>
    </Grid>
  );
};

const styles = StyleSheet.create({
  textRow: {
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ingredientName: {
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 12,
  },
  content: {
    padding: 24,
    paddingTop: 32,
    marginTop: -32,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: 'white',
  },
  resultContainer: {
    paddingLeft: 18,
    paddingRight: 18,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
    height: 42,
  },
  resultText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 12,
    fontSize: 24,
  },
});
