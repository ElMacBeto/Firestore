import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from "react";
//componts
import Marks from '../components/Marks/Marks';
import Title from '../components/Title/Title';
import SearchButton from '../components/SearchButton/SearchButton';
import * as images from '../constants/imagePath';
import ConfirmDelete from '../components/modalScreen/ConfirmDelete';
import { backgroundColor } from '../constants/colors';


function CardInfoScreen(props) {
  
  const data = props.route.params;
  const [Visible, setVisible] = useState(false);
  const [id, setId] = useState('');

  const handlerVisible = (id)=>{
    setVisible(!Visible);
    setId(id)
  }
  //
  if(data.length){
    return (
      <ScrollView style={{marginTop:10, marginBottom:10}}>
          <View>
          {
            data.map((gallo, index)=>{
              const descriptionRooster= 'Gallo '+gallo.description+' del año '+gallo.year;
              const marks = [
                  gallo.leftLeg,
                  gallo.rightLeg,
                  gallo.rightLeg
              ];
              return(
                <View style={styles.container} key={index}>
                    <Title value={gallo.plake}/>
                    <View style={styles.descriptionContainer}>
                      <Title value={descriptionRooster}/>
                    </View>
                      <Title value='marcas'/>
                    <Marks marks={marks}/>
                    <View style={styles.buttons}>
                      <View style={styles.deleteBtn}>
                        <SearchButton 
                              onClick={() => props.navigation.navigate('EditScreen')} 
                              image={images.deleteIcon}
                              BtnWidth={30}
                              BtnHeight={30}
                        />
                      </View>
                      <View style={styles.editBtn}> 
                        <SearchButton 
                            onClick={() => console.log('funciona edit')} 
                            image={images.edit}
                            BtnWidth={30}
                            BtnHeight={30}
                        />
                      </View>   
                    </View>
                    <ConfirmDelete id={id} visible={Visible} changeVisible={handlerVisible} navigation={props.navigation} data={data}/>
                </View>
              ); 
            })
          }
        </View>
      </ScrollView>
  );
  }else{
    return (
      <View style={[styles.container, {marginTop:'50%'}]}> 
          <Title value='No existe gallo con esa informacion registrados'/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
    container:{
      alignSelf:'center',
      padding:10,
      borderWidth:0.5,
      borderRadius:5,
      margin:5,
      padding:5,
      width:'90%',
    },
   descriptionContainer:{
      borderBottomWidth:0.5,
      borderStyle:'dotted',
      marginBottom:5,
   },
   buttons:{
     flexDirection:'row',
     padding:5,
     margin:5
   },
   deleteBtn:{
     marginLeft:10,
   }, 
   editBtn:{
    position:'absolute',
    right:5,
   }
})

export default CardInfoScreen;