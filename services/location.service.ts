import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './ConfigApi';
import { IBaseResponse, IResponse } from '../interfaces/base';
import { ILocation, IResponseGetLocation } from '../interfaces/location';

const URL_BASE: string = "/location/";

const http = axios.create({
  baseURL: BASE_URL,
});

export function listar(): Promise<AxiosResponse<IResponse<IResponseGetLocation>>> {
  return http.get<IResponse<IResponseGetLocation>>(`${URL_BASE}listar`, {
    headers: {
      "Content-type": "application/json",
      "accept": "application/json",
    }
  });
}

export function registrar( body: {
  id                : number;
  acuraccy          : number | null;
  altitude          : number | null;
  altitudeAcuraccy  : number | null;
  heading           : number | null;
  latitude          : number | null;
  longitud          : number | null;
  speed             : number | null;
}): Promise<AxiosResponse<IBaseResponse>> {
  return http.post<IBaseResponse>(`${URL_BASE}registrar`, body, {
    headers: {
      "Content-type": "application/json",
      "accept": "application/json",
    }
  });
}