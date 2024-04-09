<h1 align="center">React Weather App</h1>

A weather forecast application.

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Environment Setup](#environment-setup)

### Overview

![screenshot](https://github.com/anualabi/react-weather/assets/33486765/31c427e6-8406-4449-a84d-96231b8c5da7)

### Built With

- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [NextJS](https://nextjs.org/): A React framework.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind](https://tailwindcss.com/): A utility-first CSS framework for rapidly building modern websites.
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): A small, fast and scalable bearbones state-management solution.

### Features

- Users can enter a city's name and the current weather is displayed, a five-day forecast, and daily evolution.
- Users can switch between Fahrenheit and Celsius for current weather.

### How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/anualabi/react-weather.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

### Environment Setup

For this application to fetch weather data, you need to set up environment variables for the AccuWeather API. Follow these steps:

1. Create a `.env.local` file in the root directory of the project.

2. Open the `.env.local` file and add the following lines:

```env
ACCUWEATHER_API_KEY="YOUR_API_KEY_HERE"
ACCUWEATHER_API_URL=http://dataservice.accuweather.com
```
