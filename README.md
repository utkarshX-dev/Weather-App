# Weather App

A simple weather app built with React and Vite.

## Features

- Search for current weather by city name
- Displays temperature, humidity, min/max temperature, and weather description
- Responsive and clean UI using Material UI
- Weather icons and images based on current conditions

## Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Add your API key**
   - Create a `.env` file in the project root:
     ```
     VITE_WEATHER_API_KEY=your_openweathermap_api_key
     ```

4. **Run the app locally**
   ```sh
   npm run dev
   ```

## Deployment

- Do **not** commit your `.env` file.
- On platforms like [Render](https://render.com), add your `VITE_WEATHER_API_KEY` as an environment variable in the dashboard.
- Use the following build and start commands:
  - **Build:** `npm run build`
  - **Start:** `npm run preview -- --port 10000`

## Credits

Made with ❤️ by Utkarsh

---