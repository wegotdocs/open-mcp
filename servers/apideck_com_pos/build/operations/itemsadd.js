import { z } from "zod";
export const toolName = `itemsadd`;
export const toolDescription = `Create Item`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/pos/items`;
export const method = `post`;
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
export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "abbreviation": z.string().optional(), "absent_at_location_ids": z.array(z.string()).describe("A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.").optional(), "available": z.boolean().nullable().optional(), "available_for_pickup": z.boolean().optional(), "available_online": z.boolean().optional(), "categories": z.array(z.any()).optional(), "code": z.string().describe("Product code, e.g. UPC or EAN").optional(), "cost": z.number().optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "deleted": z.boolean().nullable().optional(), "description": z.string().optional(), "hidden": z.boolean().nullable().optional(), "id": z.string().optional(), "idempotency_key": z.string().max(45).describe("A value you specify that uniquely identifies this request among requests you have sent.").optional(), "modifier_groups": z.array(z.any()).optional(), "name": z.string(), "options": z.array(z.any()).describe("List of options pertaining to this item's attribute variation").optional(), "present_at_all_locations": z.boolean().optional(), "price_amount": z.number().optional(), "price_currency": z.enum(["UNKNOWN_CURRENCY", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRC", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMK", "ZMW", "BTC", "ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "pricing_type": z.enum(["fixed", "variable", "per_unit", "other"]).optional(), "product_type": z.enum(["regular", "other"]).optional(), "sku": z.string().describe("SKU of the item").optional(), "tax_ids": z.array(z.string()).describe("A list of Tax IDs for the product.").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional(), "variations": z.array(z.any()).optional(), "version": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict().optional() }).shape;
