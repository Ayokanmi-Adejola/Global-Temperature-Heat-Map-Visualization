import React from 'react';
import { useTemperatureData } from './hooks/useTemperatureData';
import HeatMap from './components/HeatMap';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { Thermometer } from 'lucide-react';

function App() {
  const { data, loading, error } = useTemperatureData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data) {
    return <ErrorMessage message="No data available" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Thermometer className="w-8 h-8 text-indigo-600 mr-3" />
            <h1 
              id="title" 
              className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Monthly Global Land-Surface Temperature
            </h1>
          </div>
          <p 
            id="description" 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {data.baseTemperature}°C base temperature. Temperature variations from 1753 to 2015.
            Each cell represents the temperature variance for a specific month and year.
          </p>
        </div>

        {/* Heat Map */}
        <div className="bg-white rounded-xl shadow-xl p-8 mx-auto" style={{ maxWidth: '1400px' }}>
          <HeatMap data={data} />
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Data source: <a 
              href="https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
              className="text-indigo-600 hover:text-indigo-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FreeCodeCamp Global Temperature Dataset
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;