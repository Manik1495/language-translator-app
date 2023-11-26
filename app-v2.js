const i18next = require('i18next');
const i18nextXHRBackend = require('i18next-xhr-backend');

i18next
  .use(i18nextXHRBackend)
  .init({
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
    lng: 'en', // Set the default language
    ns: ['app_1', 'app_2'], // Specify namespaces
    fallbackLng: 'en', // Fallback language if translation key is not found in the requested language
  });


  
  
  // const { loadFileIntoArray, fileArray } = require('/Users/manikantanprakash/automation projects/language-translator-app/app-v1.js');

  // // Call the function
  // loadFileIntoArray();
  // console.log('File Content Array:', fileArray);
  const fs = require('fs');

const fileArray = [];

// Function to load file contents into an array
function loadFileIntoArray() {
    try {
        // Read the file synchronously (change to fs.readFile for asynchronous operation)
        const fileContent = fs.readFileSync('output.txt', 'utf-8');

        // Split the file content into an array based on newline characters
        fileArray.push(...fileContent.split('\n'));

        // Log the array to the console (you can perform other actions here)
        console.log('File Content Array:', fileArray);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Example usage
loadFileIntoArray();
// module.exports = {
//     loadFileIntoArray,
//     fileArray,
// };












// List of app names
const appNames = [
  'Travel The World',
  'home',
  'Welcome to the Simple Travel Agency!',
  '',
  'The is a sample site you can test with BlazeMeter!',
  '',
  'Check out our destination of the week! The Beach!',
  '',
  'Choose your departure city:',
  'Paris',
  'Philadelphia',
  'Boston',
  'Portland',
  'San Diego',
  'Mexico City',
  'São Paolo',
  '',
  'Choose your destination city:',
  'Buenos Aires',
  'Rome',
  'London',
  'Berlin',
  'New York',
  'Dublin',
  'Cairo',
];

// Function to compare values
function compareValues() {
  const results = [];

  // Load app_1.json namespace at runtime
  i18next.addResourceBundle('en', 'app_1', { "app_name1": "Travel The World",
  "app_name2": "home",
  "app_name3": "The is a sample site you can test with BlazeMeter!",
  "app_name4": "Mexico City",
  "app_name5": "Paris",
  "app_name6": "São Paolo",
  "app_name7": "Berlin",
  "app_name8": "New York",
  "app_name10": "Philadelphia" }, true, true);
  
  i18next.addResourceBundle('en', 'app_2', { "app_name1": "Travel The World",
  "app_name2": "home",
  "app_name3": "The is a sample site you can test with BlazeMeter!",
  "app_name4": "Mexico City",
  "app_name5": "Paris",
  "app_name6": "São Paolo",
  "app_name7": "Berlin",
  "app_name8": "New York",
  "app_name9": "Buenos Aires",
  "app_name10": "Philadelphia",
  "app_name11": "Boston" }, true, true);

  // Get the keys from app_1.json
  const keysApp1 = Object.keys(i18next.getResourceBundle('en', 'app_1'));
  const valuesApp1 = Object.values(i18next.getResourceBundle('en', 'app_1'));


  // Filter appNames to include only those present in keysApp1
  const filteredAppNames = appNames.filter((appName) => valuesApp1.includes(appName));


  const keysFilteredAppNames = filteredAppNames.map((appName) => {
    const resource = i18next.getResource('en', 'app_1');
    const keyApp1 = Object.keys(resource).find(key => resource[key] === appName);
    return keyApp1;
  });


  
  
    // Fetch all values from app_2.json using keysFilteredAppNames
    const resourceApp2 = i18next.getResource('en', 'app_2');
    const valuesApp2 = keysFilteredAppNames.map((key) => resourceApp2[key]);  
    // Iterate through valuesApp2
    valuesApp2.forEach((valueApp2, index) => {
      // Get the corresponding appName using keysFilteredAppNames
      const appName = filteredAppNames[index];
  
      // Get the value from app_1.json using the appName
      const valueApp1 = i18next.t(appName, { ns: 'app_1' });
  
      // Compare values
      const result = {
        appName,
        key: keysFilteredAppNames[index],
        valueApp1,
        valueApp2,
        isEqual: valueApp1 === valueApp2,
      };
  
      results.push(result);
  
      // Log the result (you can modify this part based on your needs)
      console.log(`${result.appName} (${result.key}): ${result.valueApp1} === ${result.valueApp2} ? ${result.isEqual}`);
    });
  
    return results;
  }
  
  // Call the function to compare values with app_2.json
  

//   // Iterate through filtered app names
//   filteredAppNames.forEach((appName) => {
//     // Get the key from app_1.json
//     const keyApp1 = i18next.t(appName, { ns: 'app_1' });

//     // Get the value from app_1.json
//     const valueApp1 = i18next.t(keyApp1, { ns: 'app_1' });

//     // Get the key from app_2.json
//     const keyApp2 = i18next.t(appName, { ns: 'app_2' });

//     // Get the value from app_2.json
//     const valueApp2 = i18next.t(keyApp2, { ns: 'app_2' });

//     // Compare values
//     const result = {
//       appName,
//       valueApp1,
//       valueApp2,
//       isEqual: valueApp1 === valueApp2,
//     };

//     results.push(result);

//     // Log the result (you can modify this part based on your needs)
//     console.log(`${result.appName}: ${result.valueApp1} === ${result.valueApp2} ? ${result.isEqual}`);
//   });

//   return results;


// Call the function to compare values
const results=  compareValues()
console.log(results)
