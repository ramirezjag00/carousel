import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carousel</Text>
      <Text style={styles.subtitle}>- made using non-carousel plugins</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default App;
