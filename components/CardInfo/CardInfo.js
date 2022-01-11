
import {View, Image, SafeAreaView, Text} from 'react-native';
//components 
import styles from './styles'
function CardInfo({data, uri}){
    console.log(data);
    return(
        <View style={styles.Contanier}>
            <View style={styles.image}>
                <Image
                    style={styles.Logo}
                    source={{uri: uri}}
                />
            </View> 
            <SafeAreaView style={styles.ContainerForm}> 
                {
                    data.map((field, index)=>{
                        return(
                            <Text key={index} style={styles.textInfo}>{field}</Text>
                        )
                    })
                }
            </SafeAreaView>
        </View>
    );
}

export default CardInfo;
       
