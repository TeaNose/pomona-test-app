import { vsprintf } from 'sprintf-js';
import { callPostApi, callGetApi, callPutApi } from '../utils';
import { endpoints } from '../constants/endpoints';

export const callLoginApi = params => {
  return callPostApi(endpoints.login, params);
};

export const callRegisterApi = params => {
  return callPostApi(endpoints.register, params);
};

export const callToDoListApi = params => {
  return callGetApi(endpoints.viewToDoList, params, params.authToken);
};

export const callDetailToDoListApi = params => {
  return callGetApi(
    vsprintf(endpoints.detail, params.id),
    params,
    params.authToken
  );
};

export const callCreateToDoListApi = params => {
  return callPostApi(endpoints.createToToDoList, params, params.authToken);
};

export const callEditToDoListApi = params => {
  return callPutApi(
    vsprintf(endpoints.detail, params.id),
    params,
    params.authToken
  );
};
