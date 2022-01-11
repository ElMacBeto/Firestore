import {View, TextInput, StyleSheet, Picker, Text} from 'react-native';
//components
import Logo from '../components/Logo/Logo';
import Title from '../components/Title/Title';
import SearchButton from '../components/SearchButton/SearchButton';
import {SearchRooster} from '../utils/firebaseFireStore';
import { useState } from 'react';
import * as images from '../constants/imagePath';
import { backgroundColor } from '../constants/colors';

const HomeScreen = (props)=> {
  
  const [plaque, SetPlaque] = useState(0);
  const [filterType, setFilterType] = useState('placa');

  const handleChangePlaque = (value) => {
        SetPlaque({ ...plaque, value });
  } 
    return (    
      <View style={{ flex: 1, alignItems: 'center'}}>
              <View style={{justifyContent: 'center', marginTop:'25%',marginBottom:'25%'}}>
                <Logo />
                <Title value="Macias"/>
              </View>
              <View style={styles.container}>
                <TextInput 
                  placeholder="ejemplo:2020"
                  style={styles.textInput}
                  keyboardType="numeric"
                  onChangeText={(value)=>handleChangePlaque(value)}
                />
                <SearchButton 
                  onClick={() => {
                      //console.log(typeof(plaque.value));
                      SearchRooster(plaque.value, props.navigation, filterType);
                  }} 
                  image={images.search}
                  BtnWidth={40}
                  BtnHeight={40}
                />
              </View>
              <View style={styles.container}>
                <Text>Buscar por : </Text>
                <Picker
                  selectedValue={filterType}
                  style={styles.picker}
                  onValueChange={(itemValue) => setFilterType(itemValue)}
                >
                    <Picker.Item label="placa" value="placa" />
                    <Picker.Item label="año" value="ano" />
                </Picker>
              </View>   
              <View style={styles.add}>
                <SearchButton 
                    onClick={() => props.navigation.navigate('Register')} 
                    image={images.add}
                    BtnWidth={100}
                    BtnHeight={100}
                  />
              </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
      textInput:{
        borderWidth:2, 
        borderRadius:8, 
        fontSize:20, 
        padding:5, 
        width:300,
      },
      picker:{
        height: 30, 
        width: 150,
        alignSelf:'center',
        borderWidth:2
      },
      container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginBottom:20,
      },
      add:{
        position:'relative',
        bottom:-40,
        left:110,
      }
  });

export default HomeScreen;
