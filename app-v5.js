const i18next = require('i18next');
const i18nextXHRBackend = require('i18next-xhr-backend');
const fs = require('fs');
i18next
  .use(i18nextXHRBackend)
  .init({
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
    lng: 'en',
    ns: ['app_1', 'app_2'],
    fallbackLng: 'en',
  });

const appNames = [
  'Alexa Skills',
  'Amazon Devices',
  'Amazon Fashion',
  'Amazon Fresh',
  'Amazon Pharmacy',
  'Appliances',
  'Apps & Games',
  'Audible Audiobooks',
];

const appNames_hin = [
  'Alexa स्किल',
  'Amazon डिवाइस',
  'Amazon फैशन',
  'Amazon Fresh',
  'Amazon Pharmacy',
  'उपकरण',
  'ऐप और गेम',
  'Audible ऑडियोबुक',
];

function compareValues() {
  const results = [];

  // i18next.addResourceBundle('en', 'app_1', {
  //   "app_name1": "Alexa Skills",
  //   "app_name2": "Amazon Devices",
  //   "app_name3": "Amazon Fashion",
  //   "app_name4": "Amazon Fresh",
  //   "app_name5": "Amazon Pharmacy",
  //   "app_name6": "Appliances",
  //   "app_name7": "Apps & Games",
  //   "app_name8": "Audible Audiobooks",
  // }, true, true);

  // i18next.addResourceBundle('en', 'app_2', {
  //   "app_name1": "Alexa स्किल",
  //   "app_name2": "Amazon डिवाइस",
  //   "app_name3": "Amazon फैशन",
  //   "app_name4": "Amazon Fres",
  //   "app_name5": "Amazon Pharmacy",
  //   "app_name6": "उपकरण",
  //   "app_name7": "ऐप और गेम",
  //   "app_name8": "Audible ऑडियोबुक",
  // }, true, true);

  const app1Data = JSON.parse(fs.readFileSync('locales/en/app-en.json'));
  const app2Data = JSON.parse(fs.readFileSync('locales/es/app-hin.json'));

  i18next.addResourceBundle('en', 'app_1', app1Data, true, true);
  i18next.addResourceBundle('en', 'app_2', app2Data, true, true);

  const keysApp1 = Object.keys(i18next.getResourceBundle('en', 'app_1'));
  const valuesApp1 = Object.values(i18next.getResourceBundle('en', 'app_1'));

  const filteredAppNames = appNames.filter((appName) => valuesApp1.includes(appName));

  const keysFilteredAppNames = filteredAppNames.map((appName) => {
    const resource = i18next.getResource('en', 'app_1');
    const keyApp1 = Object.keys(resource).find(key => resource[key] === appName);
    return keyApp1;
  });

  const resourceApp2 = i18next.getResource('en', 'app_2');
  const valuesApp2 = keysFilteredAppNames.map((key) => resourceApp2[key]);

  valuesApp2.forEach((valueApp2, index) => {
    const appName = filteredAppNames[index];
    const valueApp1 = i18next.t(appName, { ns: 'app_1' });

    const result = {
      appName,
      key: keysFilteredAppNames[index],
      valueApp1,
      valueApp2,
      isEqual: valueApp1 === valueApp2,
    };

    results.push(result);

    // console.log(`${result.appName} (${result.key}): ${result.valueApp1} === ${result.valueApp2} ? ${result.isEqual}`);
  });

  return results;
}

const results = compareValues();
console.log("Amazon")
console.log(results);

// Compare with appNames_hin
for (const result of results) {
    let matchFound = false;
  
    for (let i = 0; i < appNames_hin.length; i++) {
      if (result.valueApp2 === appNames_hin[i]) {
        console.log(`'${result.valueApp2}': matches ${i}='${appNames_hin[i]}'`);
        matchFound = true;
        break;
      }
    }
  
    if (!matchFound) {
      console.log(`'${result.valueApp2}': no match found in appNames_hin`);
    }
  }
