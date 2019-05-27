import AsyncStorage from '@react-native-community/async-storage';

export default {

  async setItemAsync(id, data) {
    try {
      await AsyncStorage.setItem(id, JSON.stringify(data));

      return true;
    } catch (ex) {
      return false;
    }
  },
  async getItemAsync(id) {
    let r = { hasError: false, value: {} };
    try {
      r.value = JSON.parse(await AsyncStorage.getItem(id));
      return r;
    } catch (ex) {
      r.hasError = true;
      return r;
    }
  },
};
