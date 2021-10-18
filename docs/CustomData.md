# FacebookConversionsApiForWeb.CustomData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Number** | A numeric value associated with this event. This could be a monetary value or a value in some other metric. | [optional] 
**currency** | **String** | The currency for the value specified, if applicable. Currency must be a valid ISO 4217 (https://en.wikipedia.org/wiki/ISO_4217) three digit currency code. | [optional] 
**contentName** | **String** | The name of the page or product associated with the event. | [optional] 
**contentCategory** | **String** | The category of the content associated with the event. | [optional] 
**contentIds** | **[String]** | The content IDs associated with the event, such as product SKUs for items in an AddToCart event: ['ABC123', 'XYZ789']. If content_type is a product, then your content IDs must be an array with a single string value. Otherwise, this array can contain any number of string values. | [optional] 
**contents** | [**[Content]**](Content.md) | A list of Content objects that contain the product IDs associated with the event plus information about the products. id, quantity, and item_price are available fields. | [optional] 
**contentType** | **String** | It should be set to 'product' or 'product_group'. Use 'product', if the keys you send represent products. Sent keys could be content_ids or contents. Use product_group, if the keys you send in content_ids represent product groups. Product groups are used to distinguish products that are identical but have variations such as color, material, size or pattern. | [optional] 
**orderId** | **String** | The order ID for this transaction as a String. | [optional] 
**predictedLtv** | **Number** | The predicted lifetime value of a conversion event, as a String. | [optional] 
**numItems** | **Number** | Use only with InitiateCheckout events. The number of items that a user tries to buy during checkout. | [optional] 
**searchString** | **String** | Use only with Search events. A search query made by a user. | [optional] 
**status** | **String** | Use only with CompleteRegistration events. The status of the registration event | [optional] 


