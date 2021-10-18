# FacebookConversionsApiForWeb.Event

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventName** | **String** | A Facebook pixel Standard Event or Custom Event name. This field is used to deduplicate events sent by both Facebook Pixel and Conversions API. event_id is also used in deduplication. For the same customer action, event from the browser event match event_name from the server event. If we find a match between events sent within 48 hours of each other, we only consider the first one. If a server and browser event arrive at approximately the same time (within 5 minutes of each other), we favor the browser event. | 
**eventTime** | **Number** | A Unix timestamp in seconds indicating when the actual event occurred. The specified time may be earlier than the time you send the event to Facebook. This is to enable batch processing and server performance optimization. event_time can be up to 7 days before you send an event to Facebook. If any event_time in data is greater than 7 days in the past, we return an error for the entire request and process no events. | 
**eventSourceUrl** | **String** | The browser URL where the event happened. | [optional] 
**optOut** | **Boolean** | A flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution. | [optional] 
**eventId** | **String** | This ID can be any unique string chosen by the advertiser. event_id is used to deduplicate events sent by both Facebook Pixel and Conversions API. event_name is also used in deduplication. For deduplication, the eventID from a browser event must match the event_id in the corresponding server event. | [optional] 
**actionSource** | **String** | This field allows you to specify where your conversions occurred. Knowing where your events took place helps ensure your ads go to the right people. See docs for the allowable values. https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#action-source | 
**userData** | [**UserData**](UserData.md) |  | 
**customData** | [**CustomData**](CustomData.md) |  | [optional] 
**dataProcessingOptions** | **[String]** | Processing options you would like to enable for a specific event. For more details see: https://developers.facebook.com/docs/marketing-apis/data-processing-options. | [optional] 
**dataProcessingOptionsCountry** | **Number** | The country that you want to associate to this data processing option. If you set a country, you must also set a state. For more details see: https://developers.facebook.com/docs/marketing-apis/data-processing-options | [optional] 
**dataProcessingOptionsState** | **Number** | The state that you want to associate with this data processing option. For more details see: https://developers.facebook.com/docs/marketing-apis/data-processing-options. | [optional] 


