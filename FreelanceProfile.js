import axios from 'axios';
import React, { Component,  useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';

const ViewAllUser = () => {
  const [ AllUsers, setAllUsers ] = useState([]);
  const API = 'http://192.168.1.104:9000/freelances';

 
  useEffect(() => {
    axios.get(API)
        .then(function (response) {
        setAllUsers(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
  }, []);
 
  const viewUser = (ViewUserId) => {
    axios.get(`${API}/${ViewUserId}`)
      .then(function (response) {
        alert(response.data.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <SafeAreaView>          
      <ScrollView >
            {
              AllUsers.map((item, key) => {
                return(
                  <View style={styles.container}>
                    <View style={styles.header}></View>
                      <Image style={styles.avatar} source={{uri: 'https://media.istockphoto.com/photos/pug-puppy-making-a-face-isolated-on-white-picture-id514376400?k=20&m=514376400&s=612x612&w=0&h=nBv17XcRBafBCnWBEAodAlZxAdMU6HJwGVG6WVYfnUk='}}/>
                    <View style={styles.body}>
                      <View style={styles.bodyContent}>
                        <Text style={styles.name}>{ item.name }</Text>
                        <Text style={styles.info}>{ item.jobTitle }</Text>
                        <Text style={styles.contact}>{ item.email }{'\n'}{ item.phoneNumber }</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                          <Text style={styles.contact}>Response Rate { item.responseRate } {'\n'} On-Time Rate { item.onTimeRate }  </Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={styles.buttonContainer}>
                          <Text>1 more tank or sup or im go 5th dps  :)</Text> 
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })
            }
          </ScrollView>
    </SafeAreaView>
  );
};
 
export default ViewAllUser

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  leftTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'left'
  },
  card: {
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginVertical: 2,
    alignSelf: 'center',
    borderRadius: 5,
    width: '100%',
  },
  subTitle: {
    alignSelf: 'left',
    fontWeight: 'bold',
    fontSize: 16
  },
  input: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 7,
    width: '100%',
    paddingLeft: 10,
    marginVertical: 4
  },
  button: {
    backgroundColor: '#0275d8',
    borderRadius: 5,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center'
  },
  header:{
    backgroundColor: "yellow",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "red",
    marginTop:10,
    textAlign: 'center'
  },
  contact:{
    fontSize:16,
    color: "orange",
    marginTop:10,
    textAlign: 'center'
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:180,
    borderRadius:30,
    backgroundColor: "yellow",
  },
});

