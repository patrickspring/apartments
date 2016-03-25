'use strict';

var services = angular.module('forecast.services', []);

services.factory('forecast', function ($http) {
  function load (path, params) {
    params = params || {};
    params.callback = "JSON_CALLBACK";
    return $http.jsonp("https://api.forecast.io/forecast/22a35cf46c27df8f63f6c47e81a05384/38.2855556,-85.8241667" + path, {params: params});
  }
  return {
    shot: function (id) {
            var result = {};
            load ("/weather/" + id).then(function (data){
              angular.copy(data.data, result)
            });

            return result;
          },
    weekly: function (type, params) {
             params = params || {};
             return load("/weather/" + type, params)
//           },
//    comments: function (id, params) {
//             params = params || {};
//             return load("/weather/" + id + "/comments", params)
//           },
//
//    rebounds: function (id, params) {
//             params = params || {};
//             return load("/weather/" + id + "/rebounds", params)
//           }
  }
})

services.factory('PagedResult', function (forecast) {
  return function PagedResult (method, arg, collection_name) {
    var self = this;
    self.page = 0;
    var collection = this[collection_name] = [];

    this.loadNextPage = function () {
      dribbble[method](arg, {page: self.page + 1}).then(function (data){
        self.page = data.data.page;
        self.pages = data.data.pages;
        self.per_page = data.data.per_page;
        [].push.apply(collection, data.data[collection_name])
      })

      return this;
    }
  }

})
