export type WeatherDay = {};

export type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type WeatherInfo = {
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

export type CurrentWeatherInfo = WeatherInfo & {
  last_updated_epoch: number;
  last_updated: string;
};

export type FutureWeatherInfo = WeatherInfo & {
  time_epoch: number;
  time: string;
};

export type DayGeneralInfo = {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: {text: string; icon: string; code: number};
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
};

export type Astro = {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
};

export type ForecastItem = {
  astro: Astro;
  date: string;
  date_epoch: number;
  day: DayGeneralInfo;
  hour: FutureWeatherInfo[];
};

export type Forecast = {
  forecastday: ForecastItem[];
};

export type DayInfo = {
  current: CurrentWeatherInfo;
  location: Location;
  forecast: Forecast;
};

export type SearchLocation = {
  name: string;
};
