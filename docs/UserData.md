# FacebookConversionsApiForWeb.UserData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**em** | **String** | A hashed email address in lower case using SHA-256 algorithm. | [optional] 
**ph** | **String** | A hashed phone number using SHA-256 algorithm. Include only digits with country code, area code, and number. | [optional] 
**ge** | **String** | A hashed gender (f or m) using SHA-256 algorithm. | [optional] 
**db** | **String** | A hashed date of birth given as year, month, and day using SHA-256 algorithm | [optional] 
**ln** | **String** | A hashed last name in lowercase using SHA-256 algorithm. | [optional] 
**fn** | **String** | A hashed first name in lowercase using SHA-256 algorithm. | [optional] 
**ct** | **String** | A hashed city in lower-case without spaces or punctuation using SHA-256 algorithm. | [optional] 
**country** | **String** | A hashed two-letter country code in lowercase using SHA-256 algorithm. | [optional] 
**st** | **String** | A hashed two-letter state code in lowercase using SHA-256 algorithm. | [optional] 
**zp** | **String** | A hashed zip code using SHA-256 algorithm. If you are in the United States, this is a five-digit zip code. For other locations, follow each country's standards. | [optional] 
**externalId** | **String** | Any unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs. If External ID is being sent via other channels, it should be sent in the same format via Conversions API. Hashing external_id using SHA-256 algorithm is optional. | [optional] 
**clientIpAddress** | **String** | The IP address of the browser corresponding to the event. | [optional] 
**clientUserAgent** | **String** | The user agent for the browser corresponding to the event. | [optional] 
**fbc** | **String** | The Facebook click ID value stored in the _fbc browser cookie under your domain. See Managing fbc and fbp Parameters for how to get this value (https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc), or generate this value from a fbclid query parameter. | [optional] 
**fbp** | **String** | The Facebook browser ID value stored in the _fbp browser cookie under your domain. See Managing fbc and fbp Parameters for how to get this value (https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc). | [optional] 
**subscriptionId** | **String** | The subscription ID for the user in this transaction. This is similar to the order ID for an individual product. | [optional] 


