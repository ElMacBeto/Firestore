import { Alert } from 'react-native';
import firebase from '../database/firebase';
import { collection, getDocs, addDoc, query, where, doc, deleteDoc, onSnapshot } from 'firebase/firestore';


//save rooster
export async function AddRooster(state, navigation) {
    if(state.plake == '' || state.description=='' || state.year==''){
      
      Alert.alert('Fill in all the fields');

    }else{
      const collectionRef = collection(firebase.db, 'gallos');
          const payload = {
            ano: state.year,
            descripcion: state.description,
            nariz: state.noise,
            'pata-derecha': state.rightLeg,
            'pata-izquierda': state.leftLeg,
            placa: state.plake
          };
      try {

            await addDoc(collectionRef, payload);
            Alert.alert('Add successfully');
            navigation.navigate('Home');
      } catch (error) {
            console.log(error);
      } 
    }
}
//read rooster by plake


export async function SearchRooster(plaque, navigation, filterType){
  
  if(!plaque==0){
  
    const gallosCol = collection(firebase.db, 'gallos');    
    const q = query(gallosCol, where(filterType, "==", plaque));        
    const querySnapshot = await getDocs(q);
    const gallos=[];

    querySnapshot.forEach((doc) => {
      const gallo = doc.data();
      const newGallo = {
          id: doc.id,
          leftLeg:gallo['pata-izquierda'],
          rightLeg:gallo['pata-derecha'],
          noise:gallo.nariz,
          plake:gallo.placa,
          description: gallo.descripcion,
          year: gallo.ano,
      }
      gallos.push(newGallo);
    });
    navigation.navigate('Consult', gallos);
    
  }else{
    Alert.alert('Fill in all the fields');
  }
}

export async function DeleteDoc(id, navigation, data){
  
  //console.log(data);
 
  await deleteDoc(doc(firebase.db, "gallos", id));
  //navigation.navigate('Consult', data);
  //navigation.navigate('Home');
}
