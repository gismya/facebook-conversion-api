# FacebookConversionsApiForWeb.DefaultApi

All URIs are relative to *https://graph.facebook.com/v8.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pixelIdEventsPost**](DefaultApi.md#pixelIdEventsPost) | **POST** /{pixelId}/events | 


<a name="pixelIdEventsPost"></a>
# **pixelIdEventsPost**
> ResponseSuccess pixelIdEventsPost(body, pixelId)



### Example
```javascript
var FacebookConversionsApiForWeb = require('facebook_conversions_api__for_web');
var defaultClient = FacebookConversionsApiForWeb.ApiClient.instance;

// Configure API key authorization: facebook_api_key
var facebook_api_key = defaultClient.authentications['facebook_api_key'];
facebook_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//facebook_api_key.apiKeyPrefix = 'Token';

var apiInstance = new FacebookConversionsApiForWeb.DefaultApi();

var body = new FacebookConversionsApiForWeb.EventRequest(); // EventRequest | Facebook Conversions API (for Web) post request

var pixelId = "pixelId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pixelIdEventsPost(body, pixelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EventRequest**](EventRequest.md)| Facebook Conversions API (for Web) post request | 
 **pixelId** | **String**|  | 

### Return type

[**ResponseSuccess**](ResponseSuccess.md)

### Authorization

[facebook_api_key](../README.md#facebook_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

