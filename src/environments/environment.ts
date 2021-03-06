// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND_STATUS_API_BASE_URL: 'http://localhost:5000/',
  BACKEND_ACTION_API_BASE_URL: 'http://localhost:5000/api/v1',
  SECRET: '8a6b8c0d7e1f!_#',
  GEOCODER_API_KEY: '752213ba25a04dbe8892f80768fe5203'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
