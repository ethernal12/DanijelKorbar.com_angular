export interface Temperature{
  temp?: number
}
export interface WeatherDescription {
  id?: number;
  description?: string;
  icon?: string;
}

export interface WeatherData {
  name?: string;
  weather?: WeatherDescription[];
  main?: Temperature;
}