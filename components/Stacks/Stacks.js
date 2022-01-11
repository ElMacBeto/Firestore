import { createNativeStackNavigator } from '@react-navigation/native-stack';
//components
import HomeScreen from '../../screens/HomeScreen';
import * as colors from '../../constants/colors';
import CardInfoScreen from '../../screens/CardInfoScreen';
import RegisterScreen from '../../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const Stacks = () =>{
  return(
      <Stack.Navigator
        screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.header}
      }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: "Home"}}
        />
        <Stack.Screen 
          name="Consult" 
          component={CardInfoScreen} 
          options={{title: "Consult"}}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{title: "Register"}}
        />
      </Stack.Navigator>
  )
}

export default Stacks;