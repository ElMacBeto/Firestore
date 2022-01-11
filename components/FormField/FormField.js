import {View, TextInput, StyleSheet} from 'react-native';


const FormField = ({placeholder, multiline, numberOfLines, maxLength, onChangeText,keyboardType}) => {

    return(
        <View 
            style={styles.container}
        >
            <TextInput 
                style={styles.input}
                placeholder= {placeholder}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </View>  
    );
}
    
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:10,
        width:'100%',
    },
    input:{
        width:'90%',
        borderWidth:0.5,
        borderRadius:8,
        fontSize:15,
        padding:5,
        margin:5,
    }
});

export default FormField;
