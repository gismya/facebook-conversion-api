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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FacebookConversionsApiForWeb) {
      root.FacebookConversionsApiForWeb = {};
    }
    root.FacebookConversionsApiForWeb.ResponseErrorError = factory(root.FacebookConversionsApiForWeb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ResponseErrorError model module.
   * @module model/ResponseErrorError
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ResponseErrorError</code>.
   * @alias module:model/ResponseErrorError
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ResponseErrorError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseErrorError} obj Optional instance to populate.
   * @return {module:model/ResponseErrorError} The populated <code>ResponseErrorError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('messages'))
        obj.messages = ApiClient.convertToType(data['messages'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('fbtrace_id'))
        obj.fbtraceId = ApiClient.convertToType(data['fbtrace_id'], 'String');
      if (data.hasOwnProperty('error_subcode'))
        obj.errorSubcode = ApiClient.convertToType(data['error_subcode'], 'String');
      if (data.hasOwnProperty('is_transient'))
        obj.isTransient = ApiClient.convertToType(data['is_transient'], 'String');
      if (data.hasOwnProperty('error_user_title'))
        obj.errorUserTitle = ApiClient.convertToType(data['error_user_title'], 'String');
      if (data.hasOwnProperty('error_user_msg'))
        obj.errorUserMsg = ApiClient.convertToType(data['error_user_msg'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} messages
   */
  exports.prototype.messages = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} fbtraceId
   */
  exports.prototype.fbtraceId = undefined;

  /**
   * @member {String} errorSubcode
   */
  exports.prototype.errorSubcode = undefined;

  /**
   * @member {String} isTransient
   */
  exports.prototype.isTransient = undefined;

  /**
   * @member {String} errorUserTitle
   */
  exports.prototype.errorUserTitle = undefined;

  /**
   * @member {String} errorUserMsg
   */
  exports.prototype.errorUserMsg = undefined;


  return exports;

}));
