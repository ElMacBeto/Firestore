import { StyleSheet} from 'react-native';
import * as colors from '../../constants/colors';


const styles = StyleSheet.create({
    container:{
        justifyContent:'center'
    },  
    text:{
        fontSize:20,
        textAlign: 'center',
        color:colors.titleColor,
        fontFamily:colors.fontFamily,
    },  
});

export default styles;