import { DatasetInfo, TemperatureData } from '../types/temperature';

export const processTemperatureData = (data: DatasetInfo) => {
  const { baseTemperature, monthlyVariance } = data;
  
  return monthlyVariance.map(item => ({
    ...item,
    temperature: baseTemperature + item.variance,
    monthName: getMonthName(item.month)
  }));
};

export const getMonthName = (month: number): string => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month - 1];
};

export const getTemperatureRange = (data: any[]) => {
  const temperatures = data.map(d => d.temperature);
  return {
    min: Math.min(...temperatures),
    max: Math.max(...temperatures)
  };
};