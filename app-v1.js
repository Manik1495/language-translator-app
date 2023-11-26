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


// List of app names
const appNames = [
  'Alexa Skills',
  'Amazon Devices',
  'Amazon Fashion',
  'Amazon Fresh',
  'Amazon Pharmacy',
  'Appliances',
  'Apps & Games',
  'Audible Audiobooks'
];

const appNames_hin = [
  'Alexa स्किल',
  'Amazon डिवाइस',
  'Amazon फैशन',
  'Amazon Fresh',
  'Amazon Pharmacy',
  'उपकरण',
  'ऐप और गेम',
  'Audible ऑडियोबुक'
];

// Function to compare values
function compareValues() {
  const results = [];

  // Load app_1.json namespace at runtime
  i18next.addResourceBundle('en', 'app_1', { "app_name1": "Alexa Skills",
  "app_name2": "Amazon Devices",
  "app_name3": "Amazon Fashion",
  "app_name4": "Amazon Fresh",
  "app_name5": "Amazon Pharmacy",
  "app_name6": "Appliances",
  "app_name7": "Apps & Games",
  "app_name8": "Audible Audiobooks" }, true, true);
  
  i18next.addResourceBundle('en', 'app_2', {  "app_name2": "Alexa स्किल",
  "app_name2": "Amazon डिवाइस",
  "app_name3": "mazon फैशन",
  "app_name4": "Amazon Fresh",
  "app_name5": "Amazon Pharmacy",
  "app_name6": "उपकरण",
  "app_name7": "ऐप और गेम",
  "app_name8": "Audible ऑडियोबुक" }, true, true);

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
  
  
const results=  compareValues()
console.log(results)
