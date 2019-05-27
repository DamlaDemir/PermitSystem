import axios from "axios";
import constant from "../common/constant";
import qs from "qs";
import LocalStorageService from "../services/LocalStorageServices";
import StorageEnum from "../common/Enums/StorageEnum";

export default class PermitSystemAPI {

  static async getToken(data) {
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    };

    return axios.post(constant.BASE_URL + "token", qs.stringify(data), config);
  }

  static  async postValue(method, data) {
    let r = await LocalStorageService.getItemAsync(StorageEnum.TOKEN);
    let config = {
      headers: {
        Authorization: "Bearer " + r.value
      }
    };
    return axios.post(constant.BASE_URL + method, data, config);
  }

  static  async getValue(method, data) {
    let r = await LocalStorageService.getItemAsync(StorageEnum.TOKEN);
    let config = {
      headers: {
        Authorization: "Bearer " + r.value
      }
    };
    debugger;

    return axios.get(constant.BASE_URL + method, data, config);
  }
}

