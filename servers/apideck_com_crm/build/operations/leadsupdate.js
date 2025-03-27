import { z } from "zod";
export const toolName = `leadsupdate`;
export const toolDescription = `Update lead`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/crm/leads/{id}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "addresses": z.array(z.object({ "city": z.string().nullable().describe("Name of city.").optional(), "contact_name": z.string().nullable().optional(), "country": z.string().nullable().describe("country code according to ISO 3166-1 alpha-2.").optional(), "county": z.string().nullable().describe("Address field that holds a sublocality, such as a county").optional(), "email": z.string().nullable().optional(), "fax": z.string().nullable().optional(), "id": z.string().nullable().optional(), "latitude": z.string().nullable().optional(), "line1": z.string().nullable().describe("Line 1 of the address e.g. number, street, suite, apt #, etc.").optional(), "line2": z.string().nullable().describe("Line 2 of the address").optional(), "line3": z.string().nullable().describe("Line 3 of the address").optional(), "line4": z.string().nullable().describe("Line 4 of the address").optional(), "longitude": z.string().nullable().optional(), "name": z.string().nullable().optional(), "phone_number": z.string().nullable().optional(), "postal_code": z.string().nullable().describe("Zip code or equivalent.").optional(), "row_version": z.string().nullable().describe("A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.").optional(), "salutation": z.string().nullable().optional(), "state": z.string().nullable().describe("Name of state").optional(), "street_number": z.string().nullable().describe("Street number").optional(), "string": z.string().nullable().optional(), "type": z.enum(["primary", "secondary", "home", "office", "shipping", "billing", "other"]).optional(), "website": z.string().nullable().optional() }).strict()).optional(), "company_id": z.string().nullable().optional(), "company_name": z.string().nullable(), "contact_id": z.string().nullable().optional(), "created_at": z.string().readonly().optional(), "currency": z.enum(["UNKNOWN_CURRENCY", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRC", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMK", "ZMW", "BTC", "ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "custom_fields": z.array(z.object({ "description": z.string().describe("More information about the custom field").optional(), "id": z.string(), "name": z.string().describe("Name of the custom field.").optional(), "value": z.union([z.string().nullable(), z.number().nullable(), z.boolean().nullable(), z.array(z.string())]).optional() }).strict()).optional(), "description": z.string().nullable().optional(), "emails": z.array(z.object({ "email": z.string().email().min(1), "id": z.string().optional(), "type": z.enum(["primary", "secondary", "work", "personal", "billing", "other"]).optional() }).strict()).optional(), "fax": z.string().nullable().optional(), "first_name": z.string().nullable().optional(), "id": z.string().readonly().optional(), "language": z.string().nullable().describe("language code according to ISO 639-1. For the United States - EN").optional(), "last_name": z.string().nullable().optional(), "lead_source": z.string().nullable().optional(), "monetary_amount": z.number().nullable().optional(), "name": z.string().min(1), "owner_id": z.string().optional(), "phone_numbers": z.array(z.object({ "area_code": z.string().nullable().optional(), "country_code": z.string().nullable().optional(), "extension": z.string().nullable().optional(), "id": z.string().nullable().optional(), "number": z.string().min(1), "type": z.enum(["primary", "secondary", "home", "work", "office", "mobile", "assistant", "fax", "direct-dial-in", "personal", "other"]).optional() }).strict()).optional(), "prefix": z.string().nullable().optional(), "social_links": z.array(z.object({ "id": z.string().nullable().optional(), "type": z.string().nullable().optional(), "url": z.string().min(1) }).strict()).optional(), "status": z.string().nullable().optional(), "tags": z.array(z.string()).optional(), "title": z.string().nullable().optional(), "updated_at": z.string().readonly().optional(), "websites": z.array(z.object({ "id": z.string().nullable().optional(), "type": z.enum(["primary", "secondary", "work", "personal", "other"]).optional(), "url": z.string().min(1) }).strict()).optional() }).strict().optional() }).shape;
