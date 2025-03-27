import { z } from "zod"

export const toolName = `merchantsadd`
export const toolDescription = `Create Merchant`
export const baseUrl = `https://unify.apideck.com`
export const path = `/pos/merchants`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "address": z.object({ "city": z.string().nullable().describe("Name of city.").optional(), "contact_name": z.string().nullable().optional(), "country": z.string().nullable().describe("country code according to ISO 3166-1 alpha-2.").optional(), "county": z.string().nullable().describe("Address field that holds a sublocality, such as a county").optional(), "email": z.string().nullable().optional(), "fax": z.string().nullable().optional(), "id": z.string().nullable().optional(), "latitude": z.string().nullable().optional(), "line1": z.string().nullable().describe("Line 1 of the address e.g. number, street, suite, apt #, etc.").optional(), "line2": z.string().nullable().describe("Line 2 of the address").optional(), "line3": z.string().nullable().describe("Line 3 of the address").optional(), "line4": z.string().nullable().describe("Line 4 of the address").optional(), "longitude": z.string().nullable().optional(), "name": z.string().nullable().optional(), "phone_number": z.string().nullable().optional(), "postal_code": z.string().nullable().describe("Zip code or equivalent.").optional(), "row_version": z.string().nullable().describe("A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.").optional(), "salutation": z.string().nullable().optional(), "state": z.string().nullable().describe("Name of state").optional(), "street_number": z.string().nullable().describe("Street number").optional(), "string": z.string().nullable().optional(), "type": z.enum(["primary","secondary","home","office","shipping","billing","other"]).optional(), "website": z.string().nullable().optional() }).strict().optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "currency": z.enum(["UNKNOWN_CURRENCY","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRC","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","USS","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XTS","XXX","YER","ZAR","ZMK","ZMW","BTC","ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "language": z.string().nullable().describe("language code according to ISO 639-1. For the United States - EN").optional(), "main_location_id": z.string().nullable().describe("The main location ID of the merchant").optional(), "name": z.string().nullable().describe("The name of the merchant").optional(), "owner_id": z.string().optional(), "service_charges": z.array(z.object({ "active": z.boolean().nullable().optional(), "amount": z.number().optional(), "currency": z.enum(["UNKNOWN_CURRENCY","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRC","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","USS","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XTS","XXX","YER","ZAR","ZMK","ZMW","BTC","ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "name": z.string().describe("Service charge name").optional(), "percentage": z.number().describe("Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.").optional(), "type": z.enum(["auto_gratuity","custom"]).describe("The type of the service charge.").optional() })).optional(), "status": z.enum(["active","inactive","other"]).nullable().describe("Status of this merchant.").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict().optional() }).shape