import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Image, Text, Divider} from 'react-native-elements';
import {Grid, Row} from 'react-native-easy-grid';
import {RootStackParamList} from '../../navigations/root-navigator';
import {RouteProp} from '@react-navigation/native';

type CheckIngredientsScreenRouteProp = RouteProp<
  RootStackParamList,
  'CheckIngredients'
>;

interface CheckIngredientsProps {
  route: CheckIngredientsScreenRouteProp;
}

export const CheckIngredients = ({route}: CheckIngredientsProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row size={40}>
          <Image
            source={{uri: route.params.captureUri}}
            containerStyle={styles.imageContainer}
          />
        </Row>
        <Row size={60} style={styles.content}>
          <ScrollView>
            <Row>
              <Text h2>Lista de ingredientes:</Text>
            </Row>
            {route.params.recognizedText.map(text => (
              <>
                <Row style={styles.textRow}>
                  <Text>{text}</Text>
                </Row>
                <Divider />
              </>
            ))}
          </ScrollView>
        </Row>
      </Grid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textRow: {
    paddingBottom: 2,
    paddingTop: 2,
  },
  imageContainer: {
    flex: 1,
  },
  content: {
    padding: 18,
  },
});
