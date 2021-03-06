/*
 * Facebook Conversions API (for Web)
 * The Conversions API (for web) allows advertisers to send web events from their servers directly to Facebook. Conversions API events are linked to a pixel and are processed like browser pixel events. This means that these conversion events are used in measurement, reporting, and optimization in the same way as browser pixel events.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: web_signals_integrations@fb.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EventRequest', 'model/ResponseError', 'model/ResponseSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EventRequest'), require('../model/ResponseError'), require('../model/ResponseSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.FacebookConversionsApiForWeb) {
      root.FacebookConversionsApiForWeb = {};
    }
    root.FacebookConversionsApiForWeb.DefaultApi = factory(root.FacebookConversionsApiForWeb.ApiClient, root.FacebookConversionsApiForWeb.EventRequest, root.FacebookConversionsApiForWeb.ResponseError, root.FacebookConversionsApiForWeb.ResponseSuccess);
  }
}(this, function(ApiClient, EventRequest, ResponseError, ResponseSuccess) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the pixelIdEventsPost operation.
     * @callback module:api/DefaultApi~pixelIdEventsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/EventRequest} body Facebook Conversions API (for Web) post request
     * @param {String} pixelId 
     * @param {module:api/DefaultApi~pixelIdEventsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseSuccess}
     */
    this.pixelIdEventsPost = function(body, pixelId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pixelIdEventsPost");
      }

      // verify the required parameter 'pixelId' is set
      if (pixelId === undefined || pixelId === null) {
        throw new Error("Missing the required parameter 'pixelId' when calling pixelIdEventsPost");
      }


      var pathParams = {
        'pixelId': pixelId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['facebook_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseSuccess;

      return this.apiClient.callApi(
        '/{pixelId}/events', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
