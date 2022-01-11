import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';


function SearchButton({onClick, image, BtnWidth, BtnHeight }) {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClick}>
                <View style={styles.button}>
                    <Image
                        style={styles.image,{width: BtnWidth, height: BtnHeight}}
                        source={image}
                    />
                </View>
            </TouchableOpacity> 
        </View>
    );
  }

    
export default SearchButton;   