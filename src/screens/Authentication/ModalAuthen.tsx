import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const ModalAuthen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const visible = () => {
    setModalVisible(true);
  };
  const notVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={notVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('../../assets/authen/Warning.png')} />
            <Text style={styles.modalTitle}>Thông báo</Text>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Mã OTP không đúng.</Text>
              <Text style={styles.modalText}>Vui lòng nhập lại</Text>
            </View>
            <View style={styles.flexMt}>
              <View style={styles.viewOk} />
              <View style={styles.abc} />
            </View>

            <TouchableOpacity onPress={notVisible}>
              <Text style={styles.textStyle}>Đồng ý</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={visible}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 320,
    height: 270,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#FC832D',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 15,
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  modalTitle: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
  },
  modalContent: {
    marginTop: 8,
  },
  viewOk: {
    flex: 1,
    height: 1,
    backgroundColor: '#0000001F',
    minWidth: 320,
  },
  abc: {flex: 1, height: 1, backgroundColor: '#0000001F'},
  flexMt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
});

export default ModalAuthen;
