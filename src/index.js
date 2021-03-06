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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Content', 'model/CustomData', 'model/Event', 'model/EventRequest', 'model/ResponseError', 'model/ResponseErrorError', 'model/ResponseSuccess', 'model/UserData', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Content'), require('./model/CustomData'), require('./model/Event'), require('./model/EventRequest'), require('./model/ResponseError'), require('./model/ResponseErrorError'), require('./model/ResponseSuccess'), require('./model/UserData'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Content, CustomData, Event, EventRequest, ResponseError, ResponseErrorError, ResponseSuccess, UserData, DefaultApi) {
  'use strict';

  /**
   * The_Conversions_API__for_web_allows_advertisers_to_send_web_events_from_their_servers_directly_to_Facebook__Conversions_API_events_are_linked_to_a_pixel_and_are_processed_like_browser_pixel_events__This_means_that_these_conversion_events_are_used_in_measurement_reporting_and_optimization_in_the_same_way_as_browser_pixel_events_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var FacebookConversionsApiForWeb = require('index'); // See note below*.
   * var xxxSvc = new FacebookConversionsApiForWeb.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new FacebookConversionsApiForWeb.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new FacebookConversionsApiForWeb.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new FacebookConversionsApiForWeb.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content: Content,
    /**
     * The CustomData model constructor.
     * @property {module:model/CustomData}
     */
    CustomData: CustomData,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventRequest model constructor.
     * @property {module:model/EventRequest}
     */
    EventRequest: EventRequest,
    /**
     * The ResponseError model constructor.
     * @property {module:model/ResponseError}
     */
    ResponseError: ResponseError,
    /**
     * The ResponseErrorError model constructor.
     * @property {module:model/ResponseErrorError}
     */
    ResponseErrorError: ResponseErrorError,
    /**
     * The ResponseSuccess model constructor.
     * @property {module:model/ResponseSuccess}
     */
    ResponseSuccess: ResponseSuccess,
    /**
     * The UserData model constructor.
     * @property {module:model/UserData}
     */
    UserData: UserData,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
