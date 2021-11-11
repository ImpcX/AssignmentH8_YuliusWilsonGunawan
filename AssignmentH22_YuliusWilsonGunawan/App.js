import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
// import { Picker } from "@react-native-picker/picker";


// Fungsi masuk di Global


export default function App() {

  const [results, setResults] = useState([]);
  const [pilih, setPilih] = useState('All');

  console.log(pilih)

  useEffect(() =>
  {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => setResults(data.results))
  }, [])

  const genderAll = () =>
  {
    useEffect(() =>
    {
      fetch("https://randomuser.me/api/?results=20")
        .then((response) => response.json())
        .then((data) => setResults(data.results))
    }, [])
  }

  const genderFemale = () =>
  {
    useEffect(() =>
    {
      fetch("https://randomuser.me/api/?results=20&&gender=female")
        .then((response) => response.json())
        .then((data) => setResults(data.results))
    }, [])
  }

  const genderMale = () =>
  {
    useEffect(() =>
    {
      fetch("https://randomuser.me/api/?results=20&&gender=male")
        .then((response) => response.json())
        .then((data) => setResults(data.results))
    }, [])
  }

  return (
    <View style={styles.container}>
      <br />
      <Text style={styles.customers}>Users</Text>
      <br />
      <View>
        {/* <Picker
          selectedValue={pilih}
          onValueChange={(value, index) => setPilih(value)}
          mode="dropdown"
          style={styles.pilih}
        >
          <Picker.Item label="ALL" value="All" />
          <Picker.Item label="MALE" value="Male" />
          <Picker.Item label="FEMALE" value="Female" />
        </Picker> */}
        <Button title='All' onPress={genderAll()} />
        <Button title='Male' onPress={genderMale()} />
        <Button title='Female' onPress={genderFemale()} />
      </View>
      
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
    backgroundColor: 'darkblue'
  },

  image: {
    width: 70,
    height: 70, 
    borderRadius: 50, 
    borderWidth: 3, 
    borderColor: 'darkblue'
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
    textAlign: 'center',
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
    backgroundColor : 'darkblue'
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
  },

  pilih: {
    marginVertical: 30,
    width: 150,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#666",
    fontWeight: 'bold',
    fontSize: 20
  }
  
});
