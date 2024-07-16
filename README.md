# Weather App

A simple and elegant Weather App that provides current weather information for a user's location or any searched city. The app uses the OpenWeatherMap API to fetch weather data.

## Live Demo

You can access the live demo of the project [here](https://aayushgoyal00.github.io/Weather_App/).

## Features

- Get weather information for your current location.
- Search for weather information by city name.
- Displays city name, weather type, temperature, wind speed, humidity, and pressure.
- Beautiful and responsive UI with Tailwind CSS.

## Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript
- OpenWeatherMap API

## Setup and Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Aayushgoyal00/Weather_App.git
   cd Weather_App
2. Install the required dependencies:

     ```bash
     npm install

3. Create a postcss.config.js file with the following content to set up Tailwind CSS PurgeCSS:

       ```js
        module.exports = {
          plugins: {
          tailwindcss: {},
            autoprefixer: {},
          '@fullhuman/postcss-purgecss': {
        content: [
        './src/**/*.html',
        './src/**/*.js',
          ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }
        }
        }

4.Create a tailwind.config.js file with the following content:

    ```js
    module.exports = {
    purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    },
      darkMode: false, // or 'media' or 'class'
    theme: {
    extend: {},
      },
    variants: {
    extend: {},
      },
    plugins: [],
    }
5. Build the CSS with PurgeCSS:

    ```bash
   npm run build


6. Open index.html in your browser to see the app.

## Usage
- Click on "My city" to get the weather information for your current location.
- Click on "Search City" to open the search bar, enter a city name, and get the weather information for the specified city.
  
## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
