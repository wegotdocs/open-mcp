import { z } from "zod"

export const toolName = `createcreditsession`
export const toolDescription = `Create a new payment session`
export const baseUrl = `https://api.klarna.com`
export const path = `/payments/v1/sessions`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "acquiring_channel": z.enum(["ECOMMERCE","IN_STORE","TELESALES"]).describe("The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.").optional(), "attachment": z.object({ "body": z.string().describe("The content of the extra merchant data should be presented as a string inside this property. The body should be an object containing any of the keys and sub-objects described below serialized to JSON. More information on that object can be found [here](https://developers.klarna.com/api/#attachment-schema)."), "content_type": z.string().describe("The content type of the body. It is usually represented as \"application/vnd.klarna.internal.emd-v2+json\"") }).optional(), "authorization_token": z.string().describe("Authorization token.").readonly().optional(), "billing_address": z.object({ "attention": z.string().min(0).max(99).describe("‘Attn.’ (if applicable). Only applicable for B2B customers.").optional(), "city": z.string().min(0).max(99).describe("Customer’s city.").optional(), "country": z.string().regex(new RegExp("^[A-Za-z]{2,2}$")).describe("Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE.").optional(), "email": z.string().min(0).max(99).describe("Customer’s email address.").optional(), "family_name": z.string().min(0).max(99).describe("Customers family name in UTF-8 encoding.\nCannot be only numbers, must be more than 1 character.\nAllowed special characters: -'’.\nMore information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)").optional(), "given_name": z.string().min(0).max(99).describe("Customers given name in UTF-8 encoding.\nCannot be only numbers, must be more than 1 character.\nAllowed special characters: -'’.\nMore information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)").optional(), "organization_name": z.string().min(0).max(99).describe("Organization name (if applicable). Only applicable for B2B customers.").optional(), "phone": z.string().min(5).max(99).describe("Phone number. Preferably a mobile phone number.").optional(), "postal_code": z.string().min(0).max(10).describe("Customer’s postal code. Validation according to Universal Postal Union addressing systems.\nE.g. 12345, W1G OPW.").optional(), "region": z.string().min(0).max(99).describe("Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc.").optional(), "street_address": z.string().min(0).max(99).describe("Customer’s street address. Regional formatting is required, as follows:\nUK/US/FR: 33 Cavendish Square\nRest of EU: De Ruijterkade 7").optional(), "street_address2": z.string().min(0).max(99).describe("Customer’s street address. Second Line. ").optional(), "title": z.string().min(0).max(20).describe("Customer’s Title. Allowed values per country:\nUK - \"Mr\", \"Ms\"\nDE - \"Herr\", \"Frau\"\nAT: \"Herr, \"Frau\"\nCH: de-CH: \"Herr, \"Frau\" it-CH: \"Sig.\", \"Sig.ra\" fr-CH: \"M\", \"Mme\" \nBE: \"Dhr.\", \"Mevr.\"\nNL: \"Dhr.\", \"Mevr.\"").optional() }).optional(), "client_token": z.string().min(0).max(4096).describe("Token to be passed to the JS client").readonly().optional(), "custom_payment_method_ids": z.array(z.string()).describe("Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. ").optional(), "customer": z.object({ "date_of_birth": z.string().describe("Customer’s date of birth. The format is ‘yyyy-mm-dd’").optional(), "gender": z.string().describe("Customer’s gender - ‘male’ or ‘female’").optional(), "last_four_ssn": z.string().regex(new RegExp("^([0-9]{4}|[0-9]{9})$")).describe("Last four digits of the customer's social security number. This value is available for US customers.").optional(), "national_identification_number": z.string().describe("The customer's national identification number. This value is available for EU customers utilizing national identification numbers.").optional(), "organization_entity_type": z.enum(["LIMITED_COMPANY","PUBLIC_LIMITED_COMPANY","ENTREPRENEURIAL_COMPANY","LIMITED_PARTNERSHIP_LIMITED_COMPANY","LIMITED_PARTNERSHIP","GENERAL_PARTNERSHIP","REGISTERED_SOLE_TRADER","SOLE_TRADER","CIVIL_LAW_PARTNERSHIP","PUBLIC_INSTITUTION","OTHER"]).describe("Organization entity type. Only applicable for B2B customers.").optional(), "organization_registration_id": z.string().describe("Organization registration id. Only applicable for B2B customers.").optional(), "title": z.string().describe("Customer’s Title. Allowed values per country:\nUK - \"Mr\", \"Ms\"\nDE - \"Herr\", \"Frau\"\nAT: \"Herr, \"Frau\"\nCH: de-CH: \"Herr, \"Frau\" it-CH: \"Sig.\", \"Sig.ra\" fr-CH: \"M\", \"Mme\" \nBE: \"Dhr.\", \"Mevr.\"\nNL: \"Dhr.\", \"Mevr.\"").optional(), "type": z.string().regex(new RegExp("^(person|organization)$")).describe("Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session.").optional(), "vat_id": z.string().describe("VAT ID. Only applicable for B2B customers.").optional() }).optional(), "design": z.string().describe("Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.").optional(), "expires_at": z.string().datetime({ offset: true }).describe("Session expiration date").readonly().optional(), "intent": z.enum(["buy","tokenize","buy_and_tokenize"]).describe("Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.").optional(), "locale": z.string().regex(new RegExp("^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$")).describe("Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.\nThe following values are applicable:\n\nAT: \"de-AT\", \"de-DE\", \"en-DE\"\nBE: \"be-BE\", \"nl-BE\", \"fr-BE\", \"en-BE\"\nCH: \"it-CH\", \"de-CH\", \"fr-CH\", \"en-CH\"\nDE: \"de-DE\", \"de-AT\", \"en-DE\"\nDK: \"da-DK\", \"en-DK\"\nES: \"es-ES\", \"ca-ES\", \"en-ES\"\nFI: \"fi-FI\", \"sv-FI\", \"en-FI\"\nGB: \"en-GB\"\nIT: \"it-IT\", \"en-IT\"\nNL: \"nl-NL\", \"en-NL\"\nNO: \"nb-NO\", \"en-NO\"\nPL: \"pl-PL\", \"en-PL\"\nSE: \"sv-SE\", \"en-SE\"\nUS: \"en-US\". Default value is \"en-US\".").optional(), "merchant_data": z.string().min(0).max(6000).describe("Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)").optional(), "merchant_reference1": z.string().min(0).max(255).describe("Used for storing merchant's internal order number or other reference.").optional(), "merchant_reference2": z.string().min(0).max(255).describe("Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).").optional(), "merchant_urls": z.object({ "authorization": z.string().min(0).max(2000).describe("URL for receiving the authorization token when payment is completed. Used for Authorization Callback.").optional(), "confirmation": z.string().min(0).max(2000).describe("URL of the merchant confirmation page. The consumer will be redirected back to the confirmation page if the consumer is sent to the redirect URL after placing the order. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL(max 2000 characters).").optional(), "notification": z.string().min(0).max(2000).describe("URL for notifications on pending orders. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).").optional(), "push": z.string().min(0).max(2000).describe("URL that will be requested when an order is completed. Should be different than checkout and confirmation URLs. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).").optional() }).optional(), "options": z.object({ "color_border": z.string().regex(new RegExp("^#[A-Fa-f0-9]{6}$")).describe("Color for the border of elements within the iFrame. Value should be a CSS hex color, e.g. \"#FF9900\"").optional(), "color_border_selected": z.string().regex(new RegExp("^#[A-Fa-f0-9]{6}$")).describe("Color for the border of elements within the iFrame when selected by the customer. Value should be a CSS hex color, e.g. \"#FF9900\"").optional(), "color_details": z.string().regex(new RegExp("^#[A-Fa-f0-9]{6}$")).describe("Color for the bullet points within the iFrame. Value should be a CSS hex color, e.g. \"#FF9900\"").optional(), "color_text": z.string().regex(new RegExp("^#[A-Fa-f0-9]{6}$")).describe("Color for the texts within the iFrame. Value should be a CSS hex color, e.g. \"#FF9900\"").optional(), "radius_border": z.string().describe("Radius for the border of elements within the iFrame.").optional() }).optional(), "order_amount": z.number().int().gte(0).describe("Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500."), "order_lines": z.array(z.object({ "image_url": z.string().min(0).max(1024).describe("URL to an image that can be later embedded in communications between Klarna and the customer. (max 1024 characters).\n A minimum of 250x250 px resolution is recommended for the image to look good in the Klarna app, and below 50x50 px won't even show. We recommend using a good sized image (650x650 px or more), however the file size must not exceed 12MB.").optional(), "merchant_data": z.string().min(0).max(1024).describe("Used for storing merchant's internal order number or other reference. Pass through field. (max 1024 characters)").optional(), "name": z.string().min(1).max(255).describe("Descriptive name of the order line item."), "product_identifiers": z.object({ "brand": z.string().min(0).max(70).describe("The product's brand name as generally recognized by consumers. If no brand is available for a product, do not supply any value.").optional(), "category_path": z.string().min(0).max(750).describe("The product's category path as used in the merchant's webshop. Include the full and most detailed category and separate the segments with ' > '").optional(), "color": z.string().min(0).max(64).describe("Color to be shown to the end customer (max 64 characters).").optional(), "global_trade_item_number": z.string().min(0).max(50).describe("The product's Global Trade Item Number (GTIN). Common types of GTIN are EAN, ISBN or UPC. Exclude dashes and spaces, where possible").optional(), "manufacturer_part_number": z.string().min(0).max(70).describe("The product's Manufacturer Part Number (MPN), which - together with the brand - uniquely identifies a product. Only submit MPNs assigned by a manufacturer and use the most specific MPN possible").optional(), "size": z.string().min(0).max(64).describe("Size to be shown to the end customer (max 64 characters).").optional() }).optional(), "product_url": z.string().min(0).max(1024).describe("URL to the product in the merchant’s webshop that can be later used in communications between Klarna and the customer. (max 1024 characters)").optional(), "quantity": z.number().int().gte(0).describe("Quantity of the order line item. Must be a non-negative number."), "quantity_unit": z.string().min(1).max(8).describe("Unit used to describe the quantity, e.g. kg, pcs, etc. If defined the value has to be 1-8 characters.").optional(), "reference": z.string().min(0).max(256).describe("Client facing article number, SKU or similar. Max length is 256 characters.").optional(), "subscription": z.object({ "interval": z.enum(["DAY","WEEK","MONTH","YEAR"]).describe("The cadence unit for this."), "interval_count": z.number().int().gte(1).describe("The number of intervals"), "name": z.string().min(1).max(255).describe("The name of the subscription product") }).optional(), "tax_rate": z.number().int().gte(0).lte(10000).describe("Tax rate of the order line. Non-negative value. The percentage value is represented with two implicit decimals. I.e 1900 = 19%.").optional(), "total_amount": z.number().int().lte(100000000).describe("Total amount of the order line. Must be defined as minor units. Includes tax and discount. Eg: 2500=25 euros\nValue = (quantity x unit_price) - total_discount_amount. \n(max value: 100000000)"), "total_discount_amount": z.number().int().gte(0).describe("Non-negative minor units. Includes tax. Eg: 500=5 euros").optional(), "total_tax_amount": z.number().int().describe("Total tax amount of the order line. Must be within ±1 of total_amount - total_amount 10000 / (10000 + tax_rate). Negative when type is discount.").optional(), "type": z.string().describe("Type of the order line item. The possible values are:\n\nphysical\ndiscount\nshipping_fee\nsales_tax\ndigital\ngift_card\nstore_credit\nsurcharge").optional(), "unit_price": z.number().int().lte(100000000).describe("Price for a single unit of the order line. Must be defined as minor units. Includes tax, excludes discount. (max value: 100000000)") })).min(1).max(1000).describe("The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order."), "order_tax_amount": z.number().int().gte(0).describe("Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.").optional(), "payment_method_categories": z.array(z.object({ "asset_urls": z.object({ "descriptive": z.string().describe("URL of the descriptive asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.").optional(), "standard": z.string().describe("URL of the standard asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.").optional() }).optional(), "identifier": z.string().describe("ID of the payment method category to be used while loading the widget later.\nThe possible values are:<ul><li>klarna</li><li>pay_later</li><li>pay_now</li><li>pay_over_time</li><li>direct_bank_transfer</li><li>direct_debit</li></ul>").optional(), "name": z.string().describe("Name of the payment method category. These names are dynamic depending on what payment method is in the category. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated, or any updates of included payment methods by you.").optional() })).describe("Available payment method categories").readonly().optional(), "purchase_country": z.string().regex(new RegExp("^[A-Za-z]{2,2}$")).describe("The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc."), "purchase_currency": z.string().regex(new RegExp("^[A-Za-z]{3,3}$")).describe("The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc."), "shipping_address": z.object({ "attention": z.string().min(0).max(99).describe("‘Attn.’ (if applicable). Only applicable for B2B customers.").optional(), "city": z.string().min(0).max(99).describe("Customer’s city.").optional(), "country": z.string().regex(new RegExp("^[A-Za-z]{2,2}$")).describe("Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE.").optional(), "email": z.string().min(0).max(99).describe("Customer’s email address.").optional(), "family_name": z.string().min(0).max(99).describe("Customers family name in UTF-8 encoding.\nCannot be only numbers, must be more than 1 character.\nAllowed special characters: -'’.\nMore information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)").optional(), "given_name": z.string().min(0).max(99).describe("Customers given name in UTF-8 encoding.\nCannot be only numbers, must be more than 1 character.\nAllowed special characters: -'’.\nMore information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)").optional(), "organization_name": z.string().min(0).max(99).describe("Organization name (if applicable). Only applicable for B2B customers.").optional(), "phone": z.string().min(5).max(99).describe("Phone number. Preferably a mobile phone number.").optional(), "postal_code": z.string().min(0).max(10).describe("Customer’s postal code. Validation according to Universal Postal Union addressing systems.\nE.g. 12345, W1G OPW.").optional(), "region": z.string().min(0).max(99).describe("Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc.").optional(), "street_address": z.string().min(0).max(99).describe("Customer’s street address. Regional formatting is required, as follows:\nUK/US/FR: 33 Cavendish Square\nRest of EU: De Ruijterkade 7").optional(), "street_address2": z.string().min(0).max(99).describe("Customer’s street address. Second Line. ").optional(), "title": z.string().min(0).max(20).describe("Customer’s Title. Allowed values per country:\nUK - \"Mr\", \"Ms\"\nDE - \"Herr\", \"Frau\"\nAT: \"Herr, \"Frau\"\nCH: de-CH: \"Herr, \"Frau\" it-CH: \"Sig.\", \"Sig.ra\" fr-CH: \"M\", \"Mme\" \nBE: \"Dhr.\", \"Mevr.\"\nNL: \"Dhr.\", \"Mevr.\"").optional() }).optional(), "status": z.enum(["complete","incomplete"]).describe("The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.").readonly().optional() }).optional() }).shape