import {View, Image} from 'react-native';
import styles from './styles';

function Logo() {
    return (
        <View style={styles.ImageBorder}>
            <Image
            source={require('../../assets/images/logo2.png')}
            style={{ width: 250, height: 150 }}
            />
        </View>    
    );
  }
    
export default Logo;   
    