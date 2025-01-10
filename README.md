# Weather App

A simple weather application built using React that fetches and displays current weather data based on the user's input city.

---

## Features
- Fetches weather data using the OpenWeatherMap API.
- Displays city name, temperature, humidity, and weather condition.
- Handles user input validation.
- Provides loading feedback during API requests.

---

## Technologies Used
- **React**: For the frontend interface and state management.
- **JavaScript (ES6+)**: Core programming language.
- **HTML & CSS**: For structuring and styling the application.
- **OpenWeatherMap API**: For fetching weather data.
- **Vite**: For modern front-end tooling and development.

---

## Project Structure
```
project-folder/
├── .env                # Stores API keys securely
├── src/
│   ├── App.jsx         # Main React application logic
│   └── index.html      # Root HTML file
├── package.json        # Project dependencies and scripts
├── node_modules/       # Installed dependencies
```

---

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed.
- OpenWeatherMap API key. Sign up [here](https://home.openweathermap.org/users/sign_up) if you don't have one.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-folder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```plaintext
   VITE_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   Navigate to `http://localhost:5173/` (default Vite dev server address).

---

## Usage
1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The app will fetch and display the city's weather data, including:
   - City Name
   - Temperature (in Celsius)
   - Humidity (in percentage)
   - Weather Condition (e.g., clear sky, rain)

---

## License
This project is licensed under the MIT License.

