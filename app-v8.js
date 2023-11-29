const i18next = require('i18next');
const HttpBackend = require('i18next-http-backend');

i18next
  .use(HttpBackend)
  .init({
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
    lng: 'en',
    ns: ['app_1', 'app_2'],
    fallbackLng: 'en',
  })
  .then(() => {
    console.log('i18next initialized successfully.');
    // Any additional logic can go here

    // Explicitly exit the Node.js process
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error initializing i18next:', error);
    process.exit(1); // Exit with an error code
  });
