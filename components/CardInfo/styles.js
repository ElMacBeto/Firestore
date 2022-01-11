import { StyleSheet } from "react-native";
import * as colors from '../../constants/colors';

const styles = StyleSheet.create({
    Contanier:{
        flex:1,
        position:'relative',
        marginTop:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.backgroundColor,
        borderRadius:10,
    },
    image:{
        position:'absolute',
        top:-60,
    },
    Logo: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom:40,
    },
    ContainerForm:{
        height:'50%',
        width:'80%',
        backgroundColor:colors.titleColor,
        borderRadius:10,
        marginTop:50,
        padding:10,
     },
    textInfo:{
        color:'white',
        fontSize:25,
        minWidth:250,
        padding:8,
        margin:3,
        fontFamily:colors.fontFamily,
    },
});

export default styles;