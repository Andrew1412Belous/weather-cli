import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
  console.log(`${chalk.bgRed(' ERROR ')} ${error}`)
}

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`)
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Without params - weather output
    -s [CITY] for set city
    -h for display help
    -t [API_KEY] for save token
  `)
}

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(' WEATHER ')} in the ${res.name}
    ${icon} ${res.weather[0].description}
    Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed}
  `)
}

export {
  printError,
  printSuccess,
  printHelp,
  printWeather,
}
