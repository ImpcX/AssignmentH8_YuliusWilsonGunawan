import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [results, setResults] = useState([]);

  useEffect(() =>
  {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => setResults(data.results))
  }, [])
  console.log(results);

  return (
    <View style={styles.container}>
      <br />
      <Text style={styles.customers}>Customers</Text>
      <br />
      <ScrollView style={styles.scroll}>
        <View style={styles.pinggir}>
          {
            results.map((results) =>
            (
              <View>
                <View style={styles.backclr}>
                  <View style={styles.isi}>
                    <View style={{flex:1}}>
                      <Image
                        source={{uri: results.picture.large}}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.box}>
                      <Text style={styles.nama}>{results.name.title} {results.name.first} {results.name.last}</Text>
                      <Text style={styles.alamat}>{results.location.street.number} {results.location.street.name} ,{results.location.city} ,{results.location.country}</Text>
                      <Text style={styles.email}>{results.email}</Text>
                    </View>
                  </View>
                </View>
                <br />
              </View>
            ))
          }
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green'
  },

  image: {
    width: 70,
    height: 70, 
    borderRadius: 50, 
    borderWidth: 3, 
    borderColor: 'green'
  },

  backclr: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },  

  pinggir: {
    padding: 20,
  },

  customers: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 30
  },
  
  isi: {
    flexDirection: 'row'
  },

  box: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    flex: 5
  },

  scroll: {
    backgroundColor : 'green'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  nama: {
    fontWeight: 'bold',
    fontSize: 'large'
  },

  alamat: {

  },

  email: {
    color: 'red'
  }
  
});
