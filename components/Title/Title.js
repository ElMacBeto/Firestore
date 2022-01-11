import {View, Text} from 'react-native';
import styles from './styles';

function Title({value}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
}


export default Title;