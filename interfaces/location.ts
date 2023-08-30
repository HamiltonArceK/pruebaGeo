export interface ILocation {
  id              : number; 
  acuraccy         : number | null; 
  altitude        : number | null; 
  altitudeAcuraccy: number | null; 
  heading         : number | null; 
  latitude        : number | null; 
  longitud        : number | null; 
  speed           : number | null;
}

export interface IResponseGetLocation {
  localizacion: ILocation[];
}