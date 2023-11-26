const fs = require('fs');
const path = require('path');
const i18next = require('i18next');

// Function to initialize i18next and execute a callback when resources are loaded
function initializeI18next(callback) {
  i18next
    .init({
      lng: 'en',
      fallbackLng: 'en',
      resources: {
        en: {
          app_1: JSON.parse(fs.readFileSync('locales/en/app_1.json', 'utf8')),
          app_2: JSON.parse(fs.readFileSync('locales/es/app_2.json', 'utf8')),
        },
      },
    }, callback);
}

// List of app names
const appNames = ['Travel The World', 'home', 'Welcome to the Simple Travel Agency!', '', 'The is a sample site you can test with BlazeMeter!', '', 'Check out our destination of the week! The Beach!', '', 'Choose your departure city:', 'Paris', 'Philadelphia', 'Boston', 'Portland', 'San Diego', 'Mexico City', 'São Paolo', '', 'Choose your destination city:', 'Buenos Aires', 'Rome', 'London', 'Berlin', 'New York', 'Dublin', 'Cairo'];

// Function to compare values
function compareValues(appName, valueFromApp2) {
  console.log(`Comparing ${appName} and ${valueFromApp2}`);
  // Add your comparison logic here
  if (appName === valueFromApp2) {
    console.log('Values are equal');
  } else {
    console.log('Values are not equal');
  }
}

// Function to fetch and compare values
function fetchAndCompareValues(appName) {
  // Fetch key from app_1.json using appname
  const keyFromApp1 = `${appName.slice(0)}`; // Construct the full key

  // Fetch value from app_2.json using the key
  const valueFromApp2 = i18next.t(keyFromApp1, { ns: 'app_2' });

  // Compare values
  compareValues(appName, valueFromApp2);
}

// Initialize i18next and then iterate through app names to fetch/compare values
initializeI18next(() => {
  appNames.forEach(fetchAndCompareValues);
});
