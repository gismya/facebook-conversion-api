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
    define(['ApiClient', 'model/CustomData', 'model/UserData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomData'), require('./UserData'));
  } else {
    // Browser globals (root is window)
    if (!root.FacebookConversionsApiForWeb) {
      root.FacebookConversionsApiForWeb = {};
    }
    root.FacebookConversionsApiForWeb.Event = factory(root.FacebookConversionsApiForWeb.ApiClient, root.FacebookConversionsApiForWeb.CustomData, root.FacebookConversionsApiForWeb.UserData);
  }
}(this, function(ApiClient, CustomData, UserData) {
  'use strict';

  /**
   * The Event model module.
   * @module model/Event
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @class
   * @param eventName {String} A Facebook pixel Standard Event or Custom Event name. This field is used to deduplicate events sent by both Facebook Pixel and Conversions API. event_id is also used in deduplication. For the same customer action, event from the browser event match event_name from the server event. If we find a match between events sent within 48 hours of each other, we only consider the first one. If a server and browser event arrive at approximately the same time (within 5 minutes of each other), we favor the browser event.
   * @param eventTime {Number} A Unix timestamp in seconds indicating when the actual event occurred. The specified time may be earlier than the time you send the event to Facebook. This is to enable batch processing and server performance optimization. event_time can be up to 7 days before you send an event to Facebook. If any event_time in data is greater than 7 days in the past, we return an error for the entire request and process no events.
   * @param actionSource {String} This field allows you to specify where your conversions occurred. Knowing where your events took place helps ensure your ads go to the right people. See docs for the allowable values. https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#action-source
   * @param userData {module:model/UserData} 
   */
  var exports = function(eventName, eventTime, actionSource, userData) {
    this.eventName = eventName;
    this.eventTime = eventTime;
    this.actionSource = actionSource;
    this.userData = userData;
  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('event_name'))
        obj.eventName = ApiClient.convertToType(data['event_name'], 'String');
      if (data.hasOwnProperty('event_time'))
        obj.eventTime = ApiClient.convertToType(data['event_time'], 'Number');
      if (data.hasOwnProperty('event_source_url'))
        obj.eventSourceUrl = ApiClient.convertToType(data['event_source_url'], 'String');
      if (data.hasOwnProperty('opt_out'))
        obj.optOut = ApiClient.convertToType(data['opt_out'], 'Boolean');
      if (data.hasOwnProperty('event_id'))
        obj.eventId = ApiClient.convertToType(data['event_id'], 'String');
      if (data.hasOwnProperty('action_source'))
        obj.actionSource = ApiClient.convertToType(data['action_source'], 'String');
      if (data.hasOwnProperty('user_data'))
        obj.userData = UserData.constructFromObject(data['user_data']);
      if (data.hasOwnProperty('custom_data'))
        obj.customData = CustomData.constructFromObject(data['custom_data']);
      if (data.hasOwnProperty('data_processing_options'))
        obj.dataProcessingOptions = ApiClient.convertToType(data['data_processing_options'], ['String']);
      if (data.hasOwnProperty('data_processing_options_country'))
        obj.dataProcessingOptionsCountry = ApiClient.convertToType(data['data_processing_options_country'], 'Number');
      if (data.hasOwnProperty('data_processing_options_state'))
        obj.dataProcessingOptionsState = ApiClient.convertToType(data['data_processing_options_state'], 'Number');
    }
    return obj;
  }

  /**
   * A Facebook pixel Standard Event or Custom Event name. This field is used to deduplicate events sent by both Facebook Pixel and Conversions API. event_id is also used in deduplication. For the same customer action, event from the browser event match event_name from the server event. If we find a match between events sent within 48 hours of each other, we only consider the first one. If a server and browser event arrive at approximately the same time (within 5 minutes of each other), we favor the browser event.
   * @member {String} eventName
   */
  exports.prototype.eventName = undefined;

  /**
   * A Unix timestamp in seconds indicating when the actual event occurred. The specified time may be earlier than the time you send the event to Facebook. This is to enable batch processing and server performance optimization. event_time can be up to 7 days before you send an event to Facebook. If any event_time in data is greater than 7 days in the past, we return an error for the entire request and process no events.
   * @member {Number} eventTime
   */
  exports.prototype.eventTime = undefined;

  /**
   * The browser URL where the event happened.
   * @member {String} eventSourceUrl
   */
  exports.prototype.eventSourceUrl = undefined;

  /**
   * A flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
   * @member {Boolean} optOut
   */
  exports.prototype.optOut = undefined;

  /**
   * This ID can be any unique string chosen by the advertiser. event_id is used to deduplicate events sent by both Facebook Pixel and Conversions API. event_name is also used in deduplication. For deduplication, the eventID from a browser event must match the event_id in the corresponding server event.
   * @member {String} eventId
   */
  exports.prototype.eventId = undefined;

  /**
   * This field allows you to specify where your conversions occurred. Knowing where your events took place helps ensure your ads go to the right people. See docs for the allowable values. https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#action-source
   * @member {String} actionSource
   */
  exports.prototype.actionSource = undefined;

  /**
   * @member {module:model/UserData} userData
   */
  exports.prototype.userData = undefined;

  /**
   * @member {module:model/CustomData} customData
   */
  exports.prototype.customData = undefined;

  /**
   * Processing options you would like to enable for a specific event. For more details see: https://developers.facebook.com/docs/marketing-apis/data-processing-options.
   * @member {Array.<String>} dataProcessingOptions
   */
  exports.prototype.dataProcessingOptions = undefined;

  /**
   * The country that you want to associate to this data processing option. If you set a country, you must also set a state. For more details see: https://developers.facebook.com/docs/marketing-apis/data-processing-options
   * @member {Number} dataProcessingOptionsCountry
   */
  exports.prototype.dataProcessingOptionsCountry = undefined;

  /**
   * The state that you want to associate with this data processing option. For more details see: https://developers.facebook.com/docs/marketing-apis/data-processing-options.
   * @member {Number} dataProcessingOptionsState
   */
  exports.prototype.dataProcessingOptionsState = undefined;


  return exports;

}));
