import { useState } from 'react';
import { View, StyleSheet,SafeAreaView, Text , ScrollView} from 'react-native';

//components
import ButtonGroup from '../components/buttonGroup/buttonGroup';
import Title from '../components/Title/Title';
import SearchButton from'../components/SearchButton/SearchButton';
import FormField from '../components/FormField/FormField';
import * as form from '../constants/form';
import {AddRooster} from '../utils/firebaseFireStore';
import * as images from '../constants/imagePath';
/********************************************************************************************************* */

function RegisterScreen(props) {
    
    // textinput hook
    const [state, setState] = useState(form.initalState);
    //funtion to change text input hook
    const handleChangeText = (value, field) => {
        //console.log(value, name);
        setState({ ...state, [field]: value });
        //console.log(state);
    };

    //form
    return (
        <SafeAreaView style={{flex:1, alignItems:'center', marginTop:20}}>
            <ScrollView style={{flex:1}}>
                {
                   form.dataMarks.map((mark, index)=>{
                        return(
                            <View 
                                style = {styles.container}
                                key={'view'+index}
                            >
                                <Title 
                                    value = {mark.value}
                                    key={'title'+index}
                                />
                                <ButtonGroup 
                                    field = {mark.field}
                                    buttons = {mark.buttons}
                                    changeData = {handleChangeText}
                                    key={'mark'+index}
                                />
                            </View>
                        )
                    })
                }
                {
                   form.textFieldData.map((field, index)=>{
                        return(
                            <FormField
                                placeholder={field.placeholder}
                                multiline = {field.multiline}
                                numberOfLines = {field.numberOfLines}
                                maxLength={field.maxLength}
                                onChangeText={(value) => handleChangeText(value, field.placeholder)}
                                key={'form'+index}
                                keyboardType={field.keyboardType}
                            />
                        );
                    })
                }
                <View style={{ marginTop:20}}>
                    <SearchButton  
                        onClick ={ () =>{
                                AddRooster(state, props.navigation);
                            }
                        }
                        image={images.rooster}
                        BtnWidth={50}
                        BtnHeight={75}
                    />
                    <Text style={{textAlign:'center'}}>Add</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:10,
    },

});

export default RegisterScreen;