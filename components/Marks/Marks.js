import { View, Image, Text } from "react-native";

function Marks(marks){
    
    //console.log(marks.marks[0]);
    return(
       <View>
            <Text>{marks.marks[0]}</Text>   
            <Text>{marks.marks[1]}</Text>
            <Text>{marks.marks[2]}</Text> 
       </View>
    )
}

export default Marks;