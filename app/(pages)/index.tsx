import { Text, View, TextInput , StyleSheet} from "react-native";
import globals from '../../styles/globals';
import {Colors} from '../../constants/Colors';
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView style={style.screen}>
        <Text style={style.centerText}>ex </Text>
          <Text style={style.centerText}>₱</Text>
         <Text style={style.centerText}>ensave</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  screen:{
    backgroundColor:Colors.dark.background,
    flex:1
  },
  centerText:{
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center',
    fontFamily:'Kanit-Black.ttf',
    fontSize:40,
    color:Colors.dark.text
  }
})