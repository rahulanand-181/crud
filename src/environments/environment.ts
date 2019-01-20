// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAAV_4vRdAssZxtjrSMnIpt4TbVIp6zvIQ",
    authDomain: "crud-4cf98.firebaseapp.com",
    databaseURL: "https://crud-4cf98.firebaseio.com",
    projectId: "crud-4cf98",
    storageBucket: "",
    messagingSenderId: "753489214522"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
