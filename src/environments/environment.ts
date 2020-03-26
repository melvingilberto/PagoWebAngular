// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  merchantId: "522591303",
  currency: "PEN",
  channel: "web",
  user: "integraciones.visanet@necomplus.com",
  pwd: "d5e7nk$M",
  endPointSecurity: "https://apitestenv.vnforapps.com/api.security/v1/security",
  endPointSession: "https://apitestenv.vnforapps.com/api.ecommerce/v2/ecommerce/token/session/",
  endPointJS: "https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true",
  endPointAuthorization: "https://apitestenv.vnforapps.com/api.authorization/v3/authorization/ecommerce/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
