'use strict';
var ENVIRONMENT = '';
var config = {};
switch (ENVIRONMENT) {
  default:
    config['apiUrl'] = 'http://localhost:4000/';
    console.warn('Environment not set! Using own server instead. See at app/config/environment.js');
    break;
}
/*angular.module('picoDiarioApp.services')
  .constant('config', config);*/