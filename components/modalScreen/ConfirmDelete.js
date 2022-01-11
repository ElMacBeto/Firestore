import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
//import {DeleteDoc} from '../../utils/firebaseFireStore';
import {DeleteDoc} from '../../utils/firebaseFireStore';

const ConfirmDelete = (visible) => {  
    
    return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={visible.visible}
        onRequestClose={() => visible.changeVisible()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Estas Seguro de eliminarlo?</Text>
            <View style={styles.row}>    
                <Pressable
                    style={[styles.button, styles.buttonYes]}
                    onPress={() =>{ 
                        visible.changeVisible();
                        DeleteDoc(visible.id, visible.navigation, visible.data);
                        } 
                    }
                >
                    <Text style={styles.textStyle}>si</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonNo]}
                    onPress={() => visible.changeVisible()}
                >
                    <Text style={styles.textStyle}> no</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width:'50%',
    height: '50%',
    position:'absolute',
    top:'25%',
    left:'25%',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    width:50,
    borderRadius: 10,
    padding: 10,
    margin:10,
  },
  buttonYes: {
    backgroundColor: "#C70000",
  },
  buttonNo: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  row:{
      flexDirection:'row',
  }
});

export default ConfirmDelete;