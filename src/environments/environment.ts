// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDELAAYgzxfdAO93_WYUTdiK5js4HsWWE8',
    authDomain: 'firechat-8cc50.firebaseapp.com',
    databaseURL: 'https://firechat-8cc50.firebaseio.com',
    projectId: 'firechat-8cc50',
    storageBucket: 'firechat-8cc50.appspot.com',
    messagingSenderId: '646094148248'
  }
};
