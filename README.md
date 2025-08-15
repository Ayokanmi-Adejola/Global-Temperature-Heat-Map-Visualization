# 🌡️ Global Temperature Heat Map Visualization

A sophisticated, interactive data visualization displaying global land-surface temperature variations from 1754 to 2015. Built with React, TypeScript, D3.js, and Tailwind CSS.

![Heat Map Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Tests](https://img.shields.io/badge/FreeCodeCamp%20Tests-Passing-success)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![D3.js](https://img.shields.io/badge/D3.js-7.9.0-orange)

<img width="1920" height="1540" alt="image" src="https://github.com/user-attachments/assets/4a2aa701-4b2a-4a13-b9d3-7eddb6fa9575" />


## ✨ Features

### 📊 Data Visualization
- **Interactive Heat Map**: Visualizes monthly temperature variations across 260+ years
- **Color-Coded Cells**: Intuitive temperature representation using a blue-to-red gradient
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Smooth Animations**: Elegant hover effects and transitions

### 🎯 Interactive Elements
- **Detailed Tooltips**: Hover over any cell to see exact temperature data
- **Professional Legend**: Clear temperature scale with discrete color steps
- **Axis Labels**: Full month names and year ranges for easy navigation
- **Data Accuracy**: All temperature values precisely calculated from base temperature + variance

### 🏗️ Technical Excellence
- **TypeScript**: Full type safety and enhanced developer experience
- **Modular Architecture**: Clean separation of concerns with custom hooks and utilities
- **Performance Optimized**: Efficient data processing and rendering
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | 5.5.3 | Type Safety |
| **D3.js** | 7.9.0 | Data Visualization |
| **Tailwind CSS** | 3.4.1 | Styling |
| **Vite** | 5.4.2 | Build Tool |
| **Lucide React** | 0.344.0 | Icons |

## 📋 Requirements Compliance

This project fully complies with all FreeCodeCamp Data Visualization certification requirements:

### ✅ User Stories Completed
- [x] **Title & Description**: Proper semantic elements with required IDs
- [x] **Axes**: X-axis (years) and Y-axis (months) with correct IDs
- [x] **Data Cells**: Rectangle elements with class="cell" and proper data attributes
- [x] **Color Scheme**: 8+ distinct colors for temperature representation
- [x] **Data Accuracy**: All cells contain correct month, year, and temperature data
- [x] **Alignment**: Perfect cell alignment with corresponding axes
- [x] **Legend**: Interactive legend with multiple colored rectangles
- [x] **Tooltips**: Dynamic tooltips with data-year attribute matching active cell

### 🧪 Test Suite
All FreeCodeCamp automated tests pass successfully:
```bash
✅ Heat map has title with id="title"
✅ Heat map has description with id="description"  
✅ Heat map has x-axis with id="x-axis"
✅ Heat map has y-axis with id="y-axis"
✅ Heat map has rect elements with class="cell"
✅ At least 4 different fill colors used
✅ Cells have data-month, data-year, data-temp properties
✅ Data values within expected ranges
✅ Cells align with month on y-axis
✅ Cells align with year on x-axis
✅ Y-axis shows full month names
✅ X-axis shows years 1754-2015
✅ Legend has id="legend" with rect elements
✅ Legend uses 4+ different colors
✅ Tooltip has id="tooltip" with hover functionality
✅ Tooltip has data-year property matching active area
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/Ayokanmi-Adejola/heat-map-visualization.git

# Navigate to project directory
cd heat-map-visualization

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── HeatMap.tsx      # Main D3.js visualization component
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── hooks/               # Custom React hooks
│   └── useTemperatureData.ts
├── types/               # TypeScript type definitions
│   └── temperature.ts
├── utils/               # Utility functions
│   └── dataProcessor.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Design Philosophy

### Visual Design
- **Color Psychology**: Blue represents cooler temperatures, red represents warmer temperatures
- **Gradient Mapping**: Smooth color transitions for intuitive temperature reading
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent 8px grid system for visual harmony

### User Experience
- **Progressive Disclosure**: Information revealed on demand through tooltips
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Loading States**: Elegant loading animations during data fetch
- **Error Handling**: Graceful error messages with retry functionality

## 📊 Data Source

Temperature data sourced from the FreeCodeCamp reference dataset:
- **Base Temperature**: 8.66°C (global average)
- **Time Range**: January 1754 - December 2015
- **Data Points**: 3,153 monthly temperature variance records
- **Source**: [Global Temperature Dataset](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json)

## 🔧 Configuration

### Environment Variables
No environment variables required - the application fetches data directly from the public API.

### Customization
Key configuration options in `src/components/HeatMap.tsx`:
```typescript
// Visualization dimensions
const margin = { top: 20, right: 120, bottom: 120, left: 120 };
const width = 1200 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// Color scheme
const colorScale = d3.scaleSequential()
  .interpolator(d3.interpolateRdYlBu)
  .domain([tempRange.max, tempRange.min]);
```

## 🧪 Testing

### Automated Tests
The project includes FreeCodeCamp's automated test suite:
```html
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

### Manual Testing
1. **Data Loading**: Verify temperature data loads correctly
2. **Interactivity**: Test hover effects and tooltip functionality  
3. **Responsiveness**: Check layout on different screen sizes
4. **Accessibility**: Verify keyboard navigation and screen reader compatibility

## 🚀 Deployment

### Recommended Platforms
- **Vercel**: Automatic deployments from Git
- **Netlify**: Continuous deployment with form handling
- **GitHub Pages**: Free hosting for static sites

### Build Optimization
- Tree shaking eliminates unused code
- CSS purging removes unused styles
- Asset optimization for faster loading
- Gzip compression for reduced bundle size

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Add tests for new features
- Update documentation as needed



## 🙏 Acknowledgments

- **FreeCodeCamp**: For the comprehensive curriculum and test suite
- **D3.js Community**: For the powerful visualization library
- **React Team**: For the excellent UI framework
- **Tailwind CSS**: For the utility-first CSS framework
