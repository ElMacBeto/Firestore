import React, { useState } from "react";
import { TouchableOpacity, Image, View } from "react-native";
//import styles
import styles from "./styles";
//import functions
import SelectImage from "./SelectImage";

//init component 
const ButtonGroup = ({field, buttons, changeData}) => {
    //handler click of button matrix  
    const [clickedId, setClickedId] = useState(0);
    //save the marques selected
    const handleClick = (buttonLabel, index, field) =>{
        
        changeData(buttonLabel, field);
        setClickedId(index);
    }
    return(
        <View 
            style={styles.container}
        >
            {
                buttons.map((buttonLabel, index) => {
                    const imagePath = SelectImage(buttonLabel);
                    return(
                        <TouchableOpacity
                            key={'touch'+index}
                            onPress={() => handleClick(buttonLabel, index, field)} 
                            style={index===clickedId? styles.buttonActive : styles.button}
                        >
                            <Image
                                key={'imagesMark'+index}
                                source={imagePath}
                                style={{ width: 50, height: 50}}
                            /> 
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
  
export default ButtonGroup;