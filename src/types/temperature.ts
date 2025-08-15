export interface TemperatureData {
  year: number;
  month: number;
  variance: number;
}

export interface DatasetInfo {
  baseTemperature: number;
  monthlyVariance: TemperatureData[];
}