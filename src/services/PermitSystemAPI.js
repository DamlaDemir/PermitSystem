import axios from "axios";
import constant from "../common/constant";
import qs from "qs";
import LocalStorageService from "../services/LocalStorageServices";
import StorageEnum from "../common/Enums/StorageEnum";
import BaseComponent from '../pages/Base/index';

export default class PermitSystemAPI {

  static async getToken(data) {
    debugger;
    let config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    };

    return axios.post(constant.BASE_URL + "token", qs.stringify(data), config);
  }

  static async postValue(method, data, SuccessFunc, ErrorFunc) {
    let r = await LocalStorageService.getItemAsync(StorageEnum.TOKEN);
    let config = {
      headers: {
        Authorization: "Bearer " + r.value
      }
    };

    axios.post(constant.BASE_URL + method, data, config).then(x => {
      SuccessFunc(x);
    }).catch(x => {
      if (x.response.status == 401)
      BaseComponent.AuthFunc();
      else
      ErrorFunc(x);
    });
  }

  static async getValue(method, SuccessFunc, ErrorFunc) {
    let r = await LocalStorageService.getItemAsync(StorageEnum.TOKEN);
    let config = {
      headers: {
        Authorization: "Bearer " + r.value
      }
    };
    axios.get(constant.BASE_URL + method, config).then(x => {
      SuccessFunc(x);
    }).catch(x => {
      if (x.response.status == 401)
      BaseComponent.AuthFunc();
      else
      ErrorFunc(x);
    });
  }
}

