import { StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center', 
        justifyContent:'center',
        
    },  
    button: {
        flexDirection:'row',
        
        alignItems: 'center',
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonText:{
        color:'#000000',
        opacity:.9,
        fontSize: 15,
    },
    image:{
        width: 30,
        height: 30,
        padding:10
    }
});

export default styles;