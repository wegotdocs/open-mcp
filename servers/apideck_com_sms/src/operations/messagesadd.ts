import { z } from "zod"

export const toolName = `messagesadd`
export const toolDescription = `Create Message`
export const baseUrl = `https://unify.apideck.com`
export const path = `/sms/messages`
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

export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "body": z.string().max(1600).describe("The message text."), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "direction": z.enum(["inbound","outbound-api","outbound-call","outbound-reply","unknown"]).describe("The direction of the message.").readonly().optional(), "error": z.object({ "code": z.string().describe("The error_code provides more information about the failure. If the message was successful, this value is null").readonly().optional(), "message": z.string().readonly().optional() }).describe("The error returned if your message status is failed or undelivered.").readonly().optional(), "from": z.string().describe("The phone number that initiated the message."), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "messaging_service_id": z.string().describe("The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID.").optional(), "number_of_media_files": z.number().int().describe("The number of media files associated with the message.").readonly().optional(), "number_of_units": z.number().int().describe("The number of units that make up the complete message. Messages can be split up due to the constraints of the message size.").readonly().optional(), "price": z.object({ "currency": z.enum(["UNKNOWN_CURRENCY","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRC","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","USS","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XTS","XXX","YER","ZAR","ZMK","ZMW","BTC","ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "per_unit": z.string().readonly().optional(), "total_amount": z.string().readonly().optional() }).describe("Price of the message.").readonly().optional(), "reference": z.string().describe("A client reference.").optional(), "scheduled_at": z.string().datetime({ offset: true }).describe("The scheduled date and time of the message.").optional(), "sent_at": z.string().datetime({ offset: true }).describe("The date and time that the message was sent").readonly().optional(), "status": z.enum(["accepted","scheduled","canceled","queued","sending","sent","failed","delivered","undelivered","receiving","received","read"]).describe("Status of the delivery of the message.").readonly().optional(), "subject": z.string().optional(), "to": z.string().describe("The phone number that received the message."), "type": z.enum(["sms","mms"]).describe("Set to sms for SMS messages and mms for MMS messages.").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional(), "webhook_url": z.string().describe("Define a webhook to receive delivery notifications.").optional() }).strict().optional() }).shape